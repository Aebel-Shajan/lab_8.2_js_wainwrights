// Globalists
const wainwrightListElement = document.querySelector("#wainwrights-list");
const search = document.querySelector("#search");
let filter = "";

// Main function
const main = async () => {
    const wainwrights = await getAllWainWrights(filter);
    console.log(wainwrights);
}
main();

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


