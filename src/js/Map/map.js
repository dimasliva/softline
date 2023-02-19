import { pointsArr } from "./Variables/regions.js";

export function createMapBlock() {
  // create a new div element
  const container = document.createElement("div");

  const map = document.createElement("div");
  const points = document.createElement("div");

  createPoints(pointsArr, points)
  // and give it some content

  // add the text node to the newly created div
  container.classList.add("map_block")

  map.classList.add("map")
  points.classList.add("points")
  
  container.appendChild(points);

  container.appendChild(map);
  // add the newly created element and its content into the DOM
  return container
}
function createPoints(points, pointsContainer) {
  let newPoint = []
  let titleSpan = []
  points.forEach((point, i) => {
    if( i !== 1 && i !== 5 && i !== 8 && i !== 12 && i !== 18 && i !== 25 && i !== 31) {
      newPoint[i] = point;
      newPoint[i] = document.createElement("div")
      titleSpan[i] = document.createElement("span")
      
      titleSpan[i].innerHTML = point.title
      newPoint[i].classList.add(point.name)
      newPoint[i].classList.add(point.region)
      newPoint[i].classList.add("show")
      newPoint[i].classList.add("point")
      titleSpan[i].classList.add("name")
      newPoint[i].appendChild(titleSpan[i])
  
      createDotPoint(point, newPoint[i])
      pointsContainer.appendChild(newPoint[i])
    }

  });
}
function createDotPoint(point, pointContainer) {
    point = document.createElement("span")
    point.classList.add("dot")

    pointContainer.appendChild(point)
}