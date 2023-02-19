import { regionMoscow, regionCenter, regionEast, regionSiberia, regionSouth, regionUral, regionVolga, regionWest } from "../Variables/regions.js";

export function createModal() {
  // create a new div element
  const container = document.createElement("div");

  const countries = document.createElement("div");

  createColumn(
    [regionMoscow,regionCenter,regionWest,regionSouth,regionVolga,regionUral,regionSiberia,regionEast], 
    countries
  )

  // and give it some content

  // add the text node to the newly created div
  container.classList.add("map_modal")

  countries.classList.add("regions")

  // add the newly created element and its content into the DOM
  container.appendChild(countries)

  return container
}
function createColumn(arr, countries){
  let regions = []
  arr.forEach((contry, i) => {
    regions[i] = document.createElement("div")
    regions[i].classList.add("column")
    
    createRegions(contry, regions[i])
    countries.appendChild(regions[i])
  });
}
function createRegions(arr, countries) {
  let regions = [];

  for (var i = 0; i <= arr.length - 1; ++i) {
    regions[i] = arr[i];
    regions[i] = document.createElement("span")
    regions[i].innerHTML = arr[i].title
    regions[i].classList.add("contry")
    if(i === 0) {
      regions[i].classList.add("region")
    }

    countries.appendChild(regions[i])
  }

  return countries;
}