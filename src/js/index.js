import { createHeader } from "./Header/func.js"
import { createHeadBlock } from "./HeadBlock/func.js"
import { createAboutBlock } from "./AboutBlock/func.js"
import { createStatsBlock } from "./statsBlock/func.js"
import { createMap } from "./Map/func.js"
import { createMission } from "./mission/func.js"
import { createDirectionBlock } from "./Direction/func.js"
import { createCompensation } from "./Compensation/func.js"
import { createLife } from "./Life/func.js"

window.onload = insertDom()

function insertDom() {
  let appendBlocks = [
    createHeader(),
    createHeadBlock(),
    createAboutBlock(),
    createStatsBlock(),
    createMap(),
    createMission(),
    createDirectionBlock(),
    createCompensation(),
    createLife(),
  ] 

  const currentDiv = document.getElementById("app");
  appendBlock(currentDiv, appendBlocks)
}

function appendBlock(currentDiv, blocks) {
  blocks.forEach(block => {
    currentDiv.append(block)
  });
}