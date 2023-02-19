import { createMapBlock } from "./map.js";
import { createModal } from "./Modal/func.js";
import { createNavbar } from "./navbar.js";

export function createMap() {
  // create a new div element
  const container = document.createElement("div");
  const navbar = createNavbar() 
  const modal = createModal()
  const map = createMapBlock()

  container.classList.add("map_container")

  container.appendChild(navbar);
  container.appendChild(modal);
  container.appendChild(map);
  // add the newly created element and its content into the DOM
  return container
}