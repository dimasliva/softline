export function createHeadBlock() {
  // create a new div element
  const container = document.createElement("div");
  const title = document.createElement("div");

  const pOne = document.createElement("div");
  const pTwo = document.createElement("div");
  const pThree = document.createElement("div");

  const button = document.createElement("button");

  button.onclick = toPage
  // and give it some content
  button.innerHTML = "На сайт"
  pOne.innerHTML = "Поставщик услуг цифровой"
  pTwo.innerHTML = "трансформации"
  pThree.innerHTML = "и кибербезопасности"
  // add the text node to the newly created div

  container.classList.add("head_block")
  title.classList.add("title")
  button.classList.add("btn")
  
  title.appendChild(pOne)
  title.appendChild(pTwo)
  title.appendChild(pThree)

  container.appendChild(title);
  container.appendChild(button);
  // add the newly created element and its content into the DOM
  return container
}
function toPage() {
  window.open('https://softline.ru', '_blank');
}