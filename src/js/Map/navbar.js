import { pointsArr } from "./Variables/regions.js";

export function createNavbar() {
  // create a new div element
  const container = document.createElement("div");

  const left = document.createElement("div");
  const right = document.createElement("div");
  
  const logo = document.createElement("span");
  const arrow = document.createElement("span");
  
  const nav = document.createElement("div");
  const ul = document.createElement("div");

  const arr = ['Все', 'Москва', 'Центр', 'Северо-Запад', 'Юг', 'Волга', 'Урал', 'Сибирь', 'Дальний восток']

  createVariables(arr, ul)
  left.addEventListener('click', function handleClick(event) {
    clickOffice(left, event)
  });

  // and give it some content
  logo.innerHTML = "Офисы Softline"
  // add the text node to the newly created div
  container.classList.add("map_navbar")

  left.classList.add("left")
  right.classList.add("right")

  arrow.classList.add("arrow")
  logo.classList.add("logo")

  nav.classList.add("nav")
  ul.classList.add("ul")

  nav.appendChild(ul);
  right.appendChild(nav)

  left.appendChild(logo);
  left.appendChild(arrow);

  container.appendChild(left);
  container.appendChild(right);
  // add the newly created element and its content into the DOM
  return container
}

function clickCountry(countries, event) {
  closeModal()

  countries.forEach(element => {
    element.classList.remove("active")
  });
  
  hideCountry(event.target)

  event.target.classList.add('active');
}

function hideCountry(country) {
  if(country.textContent === "Все") {
    showAllCountry()
    return
  }
  hideAllContry()
  showClickedCountry(country)
}
function hideAllContry() {
  let hideRegions = document.getElementsByClassName("point")
      
  for (let i = 0; i < hideRegions.length; i++) {
    const element = hideRegions[i];
    element.classList.remove("show")
  }
}
function showAllCountry() {
  let showAll = document.getElementsByClassName("point")
    for (let index = 0; index < showAll.length; index++) {
      const element = showAll[index];
      element.classList.add("show")
    }
    return
}
function showClickedCountry(country) {
  pointsArr.forEach(val => {
    if(country.outerText === val.title) {
      let regions = document.getElementsByClassName(val.region)
      
      for (let i = 0; i < regions.length; i++) {
        const element = regions[i];
        element.classList.add("show")
      }
    }
  })
}

function clickOffice(office, event) {
  let modal = document.getElementsByClassName("map_modal").item(0)
  console.log(modal)
  if(office.classList.contains('active')) {
    modal.classList.remove('open')
    office.classList.remove('active');
    return
  }
  modal.classList.add('open')
  office.classList.add('active');
}

function closeModal() {
  let left = document.getElementsByClassName('left').item(0)
  let modal = document.getElementsByClassName("map_modal").item(0)
  modal.classList.remove('open')
  left.classList.remove("active")
}
function createVariables(arr, ul){
  let countries = [];

  for (var i = 0; i <= arr.length - 1; ++i) {
    countries[i] = arr[i];
    countries[i] = document.createElement("span")
    countries[i].innerHTML = arr[i]
    countries[i].classList.add("li")
    if(i === 0) {
      countries[i].classList.add("active")
    }
    countries[i].addEventListener('click', function handleClick(event) {


      clickCountry(countries, event)
    });
    ul.appendChild(countries[i])
  }

  return ul;
}