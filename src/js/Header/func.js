export function createHeader() {
  // create a new div element
  const container = document.createElement("div");
  const logo = document.createElement("span");
  
  const nav = document.createElement("div");
  const ul = document.createElement("div");

  const linkOne = document.createElement("span");
  const linkTwo = document.createElement("span");
  const linkThree = document.createElement("span");
  const linkFour = document.createElement("span");
  // and give it some content
  linkOne.innerHTML = "Облачные решения"
  linkTwo.innerHTML = "Кибербезопасность"
  linkThree.innerHTML = "Импортозамещение"
  linkFour.innerHTML = "Цифровая трансформация"
  // add the text node to the newly created div
  container.classList.add("header_navbar")
  nav.classList.add("navbar")
  logo.classList.add("logo")
  ul.classList.add("ul")
  linkOne.classList.add("li")
  linkTwo.classList.add("li")
  linkThree.classList.add("li")
  linkFour.classList.add("li")
  
  
  ul.appendChild(linkOne);
  ul.appendChild(linkTwo);
  ul.appendChild(linkThree);
  ul.appendChild(linkFour);
  nav.appendChild(ul);
  container.appendChild(logo);
  container.appendChild(nav);
  // add the newly created element and its content into the DOM
  return container
}
