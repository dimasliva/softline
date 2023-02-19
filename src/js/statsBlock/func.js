export function createStatsBlock() {
  // create a new div element
  const container = document.createElement("div");

  const blocksTop = document.createElement("div");
  const blocksBottom = document.createElement("div");

  const yearBlock = document.createElement("div");
  const yearHead = document.createElement("div");
  const yearDesc = document.createElement("span");

  const employersBlock = document.createElement("div");
  const employerHead = document.createElement("div");
  const employerDesc = document.createElement("span");
  
  const cityBlock = document.createElement("div");
  const cityHead = document.createElement("div");
  const cityDesc = document.createElement("span");
  
  const developersBlock = document.createElement("div");
  const developerHead = document.createElement("div");
  const developerDesc = document.createElement("span");

  const studyBlock = document.createElement("div");
  const studyHead = document.createElement("div");
  const studyDesc = document.createElement("span");

  const studyDescPOne = document.createElement("p");
  const studyDescPTwo = document.createElement("p");


  // and give it some content
  yearHead.innerHTML = "> 30 лет"
  yearDesc.innerHTML = "на IT-рынке"

  employerHead.innerHTML = "4600"
  employerDesc.innerHTML = "сотрудников в России"

  cityHead.innerHTML = "25"
  cityDesc.innerHTML = "городов России"

  developerHead.innerHTML = "2000 +"
  developerDesc.innerHTML = "разработчиков"

  studyHead.innerHTML = "3000 +"
  studyDescPOne.innerHTML = "сотрудников ежегодно"
  studyDescPTwo.innerHTML = "проходят оценку и обучение"
  
  // add the text node to the newly created div

  container.classList.add("study_container")

  blocksTop.classList.add(...["top_block", "blocks"])
  blocksBottom.classList.add(...["bottom_block", "blocks"])

  yearBlock.classList.add(...["year", "block"])
  employersBlock.classList.add(...["employer", "block"])
  cityBlock.classList.add(...["city", "block"])
  developersBlock.classList.add(...["developer", "block"])
  studyBlock.classList.add(...["study", "block"])
  
  studyDesc.appendChild(studyDescPOne)
  studyDesc.appendChild(studyDescPTwo)

  yearBlock.appendChild(yearHead)
  yearBlock.appendChild(yearDesc)

  employersBlock.appendChild(employerHead)
  employersBlock.appendChild(employerDesc)

  cityBlock.appendChild(cityHead)
  cityBlock.appendChild(cityDesc)

  developersBlock.appendChild(developerHead)
  developersBlock.appendChild(developerDesc)

  studyBlock.appendChild(studyHead)
  studyBlock.appendChild(studyDesc)

  blocksTop.appendChild(yearBlock)
  blocksTop.appendChild(employersBlock)
  blocksTop.appendChild(cityBlock)

  blocksBottom.appendChild(developersBlock)
  blocksBottom.appendChild(studyBlock)


  container.appendChild(blocksTop);
  container.appendChild(blocksBottom);
  // add the newly created element and its content into the DOM
  return container
}