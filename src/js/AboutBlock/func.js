export function createAboutBlock() {
  // create a new div element
  const container = document.createElement("div");

  const text = document.createElement("div");

  const company = document.createElement("span");
  const about = document.createElement("span");

  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const pThree = document.createElement("p");
  const pFour = document.createElement("p");

  // and give it some content]
  company.innerHTML = "Softline"
  about.innerHTML = " – ведущий поставщик IT-решений и сервисов.*"
  pTwo.innerHTML = " Мы предлагаем комплексные IT-решения, облака, программное"
  pThree.innerHTML = "и аппаратное обеспечение, решения по цифровой трансформации"
  pFour.innerHTML = "и кибербезопасности, а также широкий спектр IT-услуг."
  // add the text node to the newly created div
  container.classList.add("about_container")
  text.classList.add("about")
  company.classList.add("company")
  
  
  pOne.appendChild(company);
  pOne.appendChild(about);

  text.appendChild(pOne);
  text.appendChild(pTwo);
  text.appendChild(pThree);
  text.appendChild(pFour);

  container.appendChild(text);
  // add the newly created element and its content into the DOM
  return container
}
