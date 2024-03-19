// Globalists
const wainwrightListElement = document.querySelector("#wainwrights-list");
const search = document.querySelector("#search");
let filter = "";
let wainwrights;

// Main function
const main = async () => {
    wainwrightListElement.innerHTML = "";
    const loadingElement = document.createElement("p");
    loadingElement.innerText = "Awaiting API..";
    wainwrightListElement.appendChild(loadingElement);
    await delay(1000);
    try {
        wainwrights = await getAllWainWrights(filter);
        loadingElement.remove();
        wainwrights.forEach(wainwright => {
            wainwrightListElement.appendChild(createWainwrightElement(wainwright));
        })
    } catch {
        loadingElement.innerText = "Error fetching API!";
    }
}
main();

// Event Listeners
search.addEventListener("submit", (evt) => {
    evt.preventDefault();
    filter = evt.target.querySelector("#text").value;
    main();
})

// Helpers
async function getAllWainWrights(filter) {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    let data = await response.json();
    if (filter !== "") {
        data = data.filter((element) => {
            console.log(element["name"].includes(filter))
            return element["name"].toLowerCase().includes(filter.toLowerCase());
        })
    }
    return data;
}

function createWainwrightElement(wainwright) {
    const container = document.createElement("li");
    const nameElement = document.createElement("h2");
    const heightElement = document.createElement("p");
    const areaElement = document.createElement("ul");
    container.appendChild(nameElement);
    container.appendChild(heightElement);
    container.appendChild(areaElement);
    nameElement.innerText = wainwright["name"];
    heightElement.innerText = `height: ${wainwright["heightMetres"]} m`;
    Object.keys(wainwright.area).forEach((key) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${key} : ${wainwright.area[key]}`;
        areaElement.appendChild(listItem);
    })
    return container;
}

// https://alvarotrigo.com/blog/wait-1-second-javascript/
function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}