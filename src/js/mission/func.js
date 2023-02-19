export function createMission() {
  // create a new div element
  const container = document.createElement("div");

  const title = document.createElement("div");
  const desc = document.createElement("div");

  const pOne = document.createElement("div");
  const pTwo = document.createElement("div");

  // and give it some content
  title.innerHTML = "Миссия Softline"

  pOne.innerHTML = "Мы помогаем организациям трансформироваться, работать эффективно и безопасно"
  pTwo.innerHTML = "в условиях цифровой экономики."
  
  // add the text node to the newly created div

  container.classList.add("mission_block")

  title.classList.add("title")
  desc.classList.add("desc")
  
  desc.appendChild(pOne)
  desc.appendChild(pTwo)

  container.appendChild(title)
  container.appendChild(desc)

  // add the newly created element and its content into the DOM
  return container
}