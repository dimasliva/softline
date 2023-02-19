export function createCompensation() {
  // create a new div element
  const container = document.createElement("div");

  const title = document.createElement("div");

  const packages = document.createElement("div");
  const line = document.createElement("div");
  
  const motivateBlock = document.createElement("div");

  const motivateTitle = document.createElement("div");
  const motivateTitlePOne = document.createElement("div");
  const motivateTitlePTwo = document.createElement("div");
  

  // and give it some content]
  title.innerHTML = "Компенсационный пакет"
  motivateTitlePOne.innerHTML = "Программа дополнительной мотивации"
  motivateTitlePTwo.innerHTML = "доплата 12% от суммы"

  // add the text node to the newly created div
  container.classList.add("compensation_block")

  title.classList.add("title")
  packages.classList.add("packages")

  motivateBlock.classList.add(...["packages", "motivate"])
  line.classList.add("line")
  
  motivateTitle.classList.add("titles")
  motivateTitlePTwo.classList.add("hot")

  createPackages(packages)
  createMotivation(motivateBlock)

  motivateTitle.appendChild(motivateTitlePOne);
  motivateTitle.appendChild(motivateTitlePTwo);

  container.appendChild(title);
  container.appendChild(packages);
  container.appendChild(line);
  container.appendChild(motivateTitle);
  container.appendChild(motivateBlock);


  // add the newly created element and its content into the DOM
  return container
}
function createPackages(packages) {
  createPackage(['ДМС'], "dms", packages)
  createPackage(['Выходной', 'в день рождение'], "dayoff", packages)
  createPackage(["Корпоративная", "мобильная связь"], "mobile", packages)
  createPackage(["Корпоративные скидки", "на спорт"], "sales", packages)
  createPackage(['LTI'], "lti", packages)
}
function createMotivation(container) {
  createPackage(['Оргтехники'], "orgtex", container)
  createPackage(['ДМС'], "dms", container)
  createPackage(['Ипотеки'], "mortgage", container)
}
function createPackage(titles, iconName, container) {
  const pack = document.createElement("div");
  const titleContainer = document.createElement("div");
  const icon = document.createElement("div");

  titleContainer.classList.add("titles")
  icon.classList.add(...["icon", iconName])
  pack.classList.add("package")

  let title = []
  for (let i = 0; i < titles.length; i++) {
    title[i] = titles[i];
    title[i] = document.createElement("div")
    title[i].classList.add("name")
    title[i].innerHTML = titles[i]
    titleContainer.appendChild(title[i]);
  }
  pack.appendChild(icon);
  pack.appendChild(titleContainer);
  
  container.appendChild(pack);
}