import{createHeader}from"./Header/func.js";import{createHeadBlock}from"./HeadBlock/func.js";import{createAboutBlock}from"./AboutBlock/func.js";import{createStatsBlock}from"./statsBlock/func.js";import{createMap}from"./Map/func.js";import{createMission}from"./mission/func.js";import{createDirectionBlock}from"./Direction/func.js";import{createCompensation}from"./Compensation/func.js";import{createLife}from"./Life/func.js";function insertDom(){let e=[createHeader(),createHeadBlock(),createAboutBlock(),createStatsBlock(),createMap(),createMission(),createDirectionBlock(),createCompensation(),createLife()];appendBlock(document.getElementById("app"),e)}function appendBlock(e,o){o.forEach((o=>{e.append(o)}))}window.onload=insertDom();