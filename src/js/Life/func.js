export function createLife() {
  // create a new div element
  const container = document.createElement("div");

  const header = document.createElement("div");
  const title = document.createElement("div");

  const btns = document.createElement("div");
  const btnLeft = document.createElement("span");
  const btnRight = document.createElement("span");

  const slideContainer = document.createElement("div");
  const slideFooter = document.createElement("div");

  createFooterSlider(5, slideFooter, slideContainer)
  
  btnLeft.addEventListener('click', function handleClick(event) {
    btnClick(false, container, slideContainer)
  });

  btnRight.addEventListener('click', function handleClick(event) {
    btnClick(true, container, slideContainer)
  });
  // and give it some content
  title.innerHTML = "Корпоративная жизнь"

  // add the text node to the newly created div

  container.classList.add("life_block")

  header.classList.add("header")
  title.classList.add("title")

  btns.classList.add("btns")
  btnLeft.classList.add(...["btn", "left"])
  btnRight.classList.add(...["btn", "right"])
  
  slideContainer.classList.add(...["slide", 'num' + 0])
  slideFooter.classList.add("footer")

  btns.appendChild(btnLeft)
  btns.appendChild(btnRight)

  header.appendChild(title)
  header.appendChild(btns)

  container.appendChild(header)
  container.appendChild(slideContainer)
  container.appendChild(slideFooter)

  // add the newly created element and its content into the DOM
  return container
}

function createFooterSlider(num, container, slideContainer) {
  const slideBlocks = []

  for (let i = 0; i < num; i++) {
    slideBlocks[i] = document.createElement("div");
    if(i === 0) {
      slideBlocks[i].classList.add("active")
    }
    slideBlocks[i].classList.add("block")
    slideBlocks[i].addEventListener('click', function handleClick(event) {
      slidesHide(slideBlocks)
      slideBlocks[i].classList.add("active")
      setSlide(i, slideContainer)
      console.log(i)
    });
    container.appendChild(slideBlocks[i])
    
  }
}
function slidesHide(slides) {
  slides.forEach(element => {
    element.classList.remove("active")
  });
}
function btnClick(next, container, slideContainer) {
  let footer = container.getElementsByClassName("block")
  let elements = []
  for (let i = 0; i < footer.length; i++) {
    elements[i] = footer[i];
    if(elements[i].classList.contains("active")) {
      var currentNumSlide = i
      footer[i].classList.remove("active")
      slideContainer.classList.remove('num' + currentNumSlide)
    }
  }
  if(next) {
    nextSlide(footer, currentNumSlide, slideContainer)
  } else {
    lastSlide(footer, currentNumSlide, slideContainer)
  }
  
} 

function nextSlide(footer, currentNumSlide, slideContainer) {
  let nextNum = currentNumSlide + 1
  if(footer[nextNum]) {
    footer[nextNum].classList.add("active")
    setSlide(nextNum, slideContainer)
  } else {
    footer[0].classList.add("active")
    setSlide(0, slideContainer)
  }
}
function lastSlide(footer, currentNumSlide, slideContainer) {
  let lastNum = currentNumSlide - 1
  let lastElement = footer.length - 1
  if(footer[lastNum]) {
    footer[lastNum].classList.add("active")
    setSlide(lastNum, slideContainer)
  } else {
    footer[lastElement].classList.add("active")
    setSlide(lastElement, slideContainer)
  }
}

function setSlide(num, container) {
  for (let i = 0; i < 5; i++) {
   container.classList.remove('num' + i)
    
  }
  container.classList.add('num' + num)
}