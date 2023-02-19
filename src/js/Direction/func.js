export function createDirectionBlock() {
  // create a new div element
  const container = document.createElement("div");

  const title = document.createElement("div");
  const blocks = document.createElement("div");

  // and give it some content]
  title.innerHTML = "Направления бизнеса"

  // add the text node to the newly created div
  container.classList.add("direction_block")
  title.classList.add("title")
  blocks.classList.add("blocks")

  createSolve(blocks)
  createCyber(blocks)
  createImport(blocks)
  createSky(blocks)
  createDigital(blocks)
  createSupport(blocks)

  container.appendChild(title);
  container.appendChild(blocks);
  // add the newly created element and its content into the DOM
  return container
}
function createSolve(blocks) {
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const pThree = document.createElement("p");
  const pFour = document.createElement("p");

  pOne.innerHTML = "ГК Softline предлагает клиентам собственную линейку оборудования"
  pTwo.innerHTML = "(ПК, серверы, торговое оборудование и проч.), разработку"
  pThree.innerHTML = "программных продуктов, облачных решений, решений в области"
  pFour.innerHTML = "информационной безопасности."
  createBlock(
    'Решение Softline', 
    [pOne, pTwo, pThree, pFour],
    'solve',
    blocks
  )
}
function createCyber(blocks) {
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const pThree = document.createElement("p");

  pOne.innerHTML = "Softline обладает всеми необходимыми государственными лицензиями"
  pTwo.innerHTML = "для организации проектов по информационной безопасности и "
  pThree.innerHTML = "аттестации. "
  createBlock(
    'Кибербезопасность', 
    [pOne, pTwo, pThree],
    'cyber',
    blocks
  )
}
function createSky(blocks) {
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const pThree = document.createElement("p");

  pOne.innerHTML = "Softline использует современные облачные решения как российских, "
  pTwo.innerHTML = "так и международных вендоров для масштабирования бизнеса своих"
  pThree.innerHTML = "клиентов. Подписки, услуги, трансформация."
  createBlock(
    'Облачные решения', 
    [pOne, pTwo, pThree],
    'sky',
    blocks
  )
}
function createDigital(blocks) {
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const pThree = document.createElement("p");

  pOne.innerHTML = "Softline использует современные технологи и новые возможности для"
  pTwo.innerHTML = " увеличения производительности бизнеса заказчика. В штате ГК Softline"
  pThree.innerHTML = "- 2000+ разработчиков, которые трансформируют ПО под нужды"
  pThree.innerHTML = "конкретного предприятия."
  createBlock(
    'Цифровая трансформация и разработка ПО', 
    [pOne, pTwo, pThree],
    'digital',
    blocks
  )
}
function createSupport(blocks) {
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const pThree = document.createElement("p");

  pOne.innerHTML = "200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году,"
  pTwo.innerHTML = " сервисное партнерство с 30+ мировыми производителями."
  createBlock(
    'Техническая поддержка Softline', 
    [pOne, pTwo, pThree],
    'support',
    blocks
  )
}
function createImport(blocks) {
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const pThree = document.createElement("p");

  pOne.innerHTML = "ГК Softline обладает широчайшим портфелем решений и услуг для"
  pTwo.innerHTML = "импортозамещения, включая ПО и оборудование собственного"
  pThree.innerHTML = "производства."
  createBlock(
    'Импортозамещение', 
    [pOne, pTwo, pThree],
    'import',
    blocks
  )
}

function createBlock(title, desc, nameBlock, blocks) {
  const block = document.createElement("div");

  const titleContainer = document.createElement("div");
  const descContainer = document.createElement("div");

  const titleText = document.createElement("span")
  const descText = document.createElement("span")

  titleText.innerHTML = title

  block.classList.add(...["block", nameBlock])

  titleContainer.classList.add("title_container")
  titleText.classList.add("title")
  
  descContainer.classList.add("desc_container")
  descText.classList.add("desc")

  titleContainer.appendChild(titleText);

  desc.forEach(element => {
    element.classList.add("desc")
    descContainer.appendChild(element);
  });

  titleContainer.appendChild(descContainer);
  block.appendChild(titleContainer);

  blocks.appendChild(block);
  return block
}