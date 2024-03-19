// Globalists
const wainwrightListElement = document.querySelector("#wainwrights-list");
const search = document.querySelector("#search");
let filter = "";

// Main function
const main = async () => {
    const wainwrights = await getAllWainWrights(filter);
    wainwrights.forEach(wainwright => {
        wainwrightListElement.appendChild(createWainwrightElement(wainwright));
    })
}
main();

// Event Listeners
search.addEventListener("submit", (evt) => {
    evt.preventDefault();
    filter = evt.target.querySelector("#text").value;
    wainwrightListElement.innerHTML = "";
    main();
})

// Helpers
async function getAllWainWrights(filter) {
    const respnose = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    let data = await respnose.json();
    if (filter !== "") {
        data = data.filter((element, index) => {
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
    heightElement.innerText = wainwright["heightMetres"];
    Object.keys(wainwright.area).forEach((key) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${key} : ${wainwright.area[key]}`;
        areaElement.appendChild(listItem);
    })
    
    return container;
}

