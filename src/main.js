const table = document.querySelector('.game-main tbody');
const tableRow = document.querySelectorAll('.game-main tr');
const tableColumn = document.querySelectorAll('.game-main tr td');

let bgc = '#22253e';

let color = [
  '#cd73e0',
  '#fff66f',
  '#00ceff',
  '#a897ff',
  '#0075ff',
  '#08b69e',
  '#d1d848',
  '#ff6a77',
  '#f76e99',
  '#ecbc55',
  '#7fa048',
];

const startBtn = document.querySelector('.popup-btn');
const popUp = document.querySelector('.pop-up');

const oneRow = 10;
const startCol = 3;
const limit = 149;
const blockType = [ playTypeI, playTypeL, playTypeO, playTypeT, playTypeZ];
function removeType(cell){
  tableColumn[cell].style.backgroundColor = bgc;
}

function typeI(oneLine, colorNum) {
  for (let cell = 0; cell < 4; cell++) {
    tableColumn[cell + oneLine].style.backgroundColor = color[colorNum];
  }
}

function typeICol(oneLine, colorNum) {
  let num = 0;
  for (let cell = 0; cell < 4; cell++) {
    tableColumn[cell + oneLine + num].style.backgroundColor = color[colorNum];
    num = num + 9;
  }
}

function typeLCol(oneLine, colorNum) {
  console.log(oneLine)
  let num = 0;
  for (let cell = 0; cell < 3; cell++) {
    tableColumn[cell + oneLine + num].style.backgroundColor = color[colorNum];
    num = num + 9;
  }
  tableColumn[oneLine + 21].style.backgroundColor = color[colorNum];
}


function removeTypeCol(oneLine) {
  let num = 0;
  for (let cell = 0; cell < 4; cell++) {
    tableColumn[cell + oneLine + num].style.backgroundColor = bgc;
    num = num + 9;
  }
}

function typeO(oneLine, colorNum) {
  for (let cell = 0; cell < 2; cell++) {
    tableColumn[cell + oneLine].style.backgroundColor = color[colorNum];
  }
  for (let cell = 0; cell < 2; cell++) {
    tableColumn[cell + oneLine + oneRow].style.backgroundColor =
        color[colorNum];
  }
}
function typeL(oneLine, colorNum) {
  for (let cell = 0; cell < 3; cell++) {
    tableColumn[cell + oneLine].style.backgroundColor = color[colorNum];
  }
  tableColumn[oneLine + oneRow].style.backgroundColor = color[colorNum];
}
function typeT(oneLine, colorNum) {
  for (let cell = 0; cell < 3; cell++) {
    tableColumn[cell + oneLine].style.backgroundColor = color[colorNum];
  }
  tableColumn[oneLine + oneRow + 1].style.backgroundColor = color[colorNum];
}
function typeZ(oneLine, colorNum) {
  for (let cell = 0; cell < 2; cell++) {
    tableColumn[cell + oneLine].style.backgroundColor = color[colorNum];
    tableColumn[cell + oneLine - oneRow].style.backgroundColor = bgc;
  }
  for (let cell = 2; cell < 4; cell++) {
    tableColumn[cell + oneLine - 11].style.backgroundColor = color[colorNum];
    tableColumn[cell + oneLine - oneRow - 11].style.backgroundColor = bgc;
  }
}

function typeZCol(oneLine, colorNum) {
  let num = 0;
  for (let cell = 0; cell < 2; cell++) {
    tableColumn[cell + oneLine + num].style.backgroundColor = color[colorNum];
    num = num + 9;
  }
  let num2 = 11;
  for (let cell = 0; cell < 2; cell++) {
    tableColumn[cell + oneLine + num2].style.backgroundColor = color[colorNum];
    num2 = num2 + 9;
  }
}
let row = true;
let col = false;
let blockNum = 0;
function playTypeI(direction){
  if(row){
    if (direction == 'ArrowRight') {
      removeType(blockNum);
      blockNum++;
      typeI(blockNum,1);
    }
    else if(direction == 'ArrowLeft') {
      blockNum--;
      removeType(blockNum+4);
      typeI(blockNum,1);
    }
    else if(direction == 'ArrowDown') {
      for(let i = 0; i < 4; i++){
        removeType(blockNum+i);
      }
      blockNum += 10;
      typeI(blockNum,1);
    }
    else if(direction == 'ArrowUp') {
      typeICol(blockNum,1);
      removeType(blockNum+1);
      removeType(blockNum+2);
      removeType(blockNum+3);
      col = true;
      row = false;
    }
  }
  else if(col){
    if (direction == 'ArrowRight') {
      removeTypeCol(blockNum);
      blockNum++;
      typeICol(blockNum,1);
    }
    else if(direction == 'ArrowLeft') {
      blockNum--;
      removeTypeCol(blockNum + 1);
      typeICol(blockNum,1);
    }
    else if(direction == 'ArrowDown') {
      for(let i = 0; i < 4; i++){
        removeTypeCol(blockNum+i);
      }
      blockNum += 10;
      typeICol(blockNum,1);
    }
    else if(direction == 'ArrowUp') {
      for(let i = 0; i < 4; i++){
        removeTypeCol(blockNum+i*10);
      }
      typeI(blockNum,1);
      col = false;
      row = true;
    }
  }
}

function playTypeZ(direction){
  if(row){
    if (direction == 'ArrowRight') {
      removeType(blockNum);
      blockNum++;
      typeZ(blockNum,1);
    }
    else if(direction == 'ArrowLeft') {
      blockNum--;
      removeType(blockNum+2);
      removeType(blockNum-7);
      typeZ(blockNum,1);
    }
    else if(direction == 'ArrowDown') {
      for(let i = 0; i < 4; i++){
        removeType(blockNum+i);
      }
      blockNum += 10;
      typeZ(blockNum,1);
    }
    else if(direction == 'ArrowUp') {
      typeZCol(blockNum,1);
      removeType(blockNum+1);
      removeType(blockNum-8);
      removeType(blockNum-9);
      col = true;
      row = false;
    }
  }
  else if(col){
    if (direction == 'ArrowRight') {
      blockNum++;
      typeZCol(blockNum,1);
      removeType(blockNum + 20);
      removeType(blockNum - 1);
      removeType(blockNum + 9);
    }
    else if(direction == 'ArrowLeft') {
      blockNum--;
      removeType(blockNum + 22);
      removeType(blockNum + 1);
      removeType(blockNum + 12);
      typeZCol(blockNum,1);
      console.log(blockNum)
    }
    else if(direction == 'ArrowDown') {
      for(let i = 0; i < 4; i++){
        removeTypeCol(blockNum+i);
      }
      blockNum += 10;
      typeZCol(blockNum,1);
    }
    else if(direction == 'ArrowUp') {
      typeZ(blockNum,1);
      removeType(blockNum+10);
      removeType(blockNum+11);
      removeType(blockNum+21);
      col = false;
      row = true;
    }
  }
}

function playTypeL(direction){
  if(row){
    if (direction == 'ArrowRight') {
      removeType(blockNum);
      removeType(blockNum+10);
      blockNum++;
      typeL(blockNum,1);
    }
    else if(direction == 'ArrowLeft') {
      blockNum--;
      removeType(blockNum+3);
      removeType(blockNum+11);
      typeL(blockNum,1);
    }
    else if(direction == 'ArrowDown') {
      for(let i = 0; i < 4; i++){
        removeType(blockNum+i);
      }
      blockNum += 10;
      typeL(blockNum,1);
    }
    else if(direction == 'ArrowUp') {
      typeLCol(blockNum,1);
      removeType(blockNum+1);
      removeType(blockNum+2);
      col = true;
      row = false;
    }
  }
  else if(col){
    if (direction == 'ArrowRight') {
      blockNum++;
      typeLCol(blockNum,1);
      removeType(blockNum - 1);
      removeType(blockNum + 9);
      removeType(blockNum + 19);
    }
    else if(direction == 'ArrowLeft') {
      blockNum--;
      removeType(blockNum + 1);
      removeType(blockNum + 11);
      removeType(blockNum + 22);
      typeLCol(blockNum,1);
    }
    else if(direction == 'ArrowDown') {
      for(let i = 0; i < 4; i++){
        removeTypeCol(blockNum+i);
      }
      blockNum += 10;
      typeLCol(blockNum,1);
    }
    else if(direction == 'ArrowUp') {
      typeL(blockNum,1);
      removeType(blockNum+20);
      removeType(blockNum+21);
      col = false;
      row = true;
    }
  }
}

function playTypeT(direction){
  if(row){
    if (direction == 'ArrowRight') {
      removeType(blockNum);
      removeType(blockNum + 11);
      blockNum++;
      typeT(blockNum,1);
    }
    else if(direction == 'ArrowLeft') {
      blockNum--;
      console.log(blockNum)
      removeType(blockNum+3);
      removeType(blockNum+12);
      typeT(blockNum,1);
    }
    else if(direction == 'ArrowDown') {
      for(let i = 0; i < 4; i++){
        removeType(blockNum+i);
      }
      blockNum += 10;
      typeT(blockNum,1);
    }
    else if(direction == 'ArrowUp') {
      // typeLCol(blockNum,1);
      // removeType(blockNum+1);
      // removeType(blockNum+2);
      col = true;
      row = false;
    }
  }
  else if(col){
    if (direction == 'ArrowRight') {
      blockNum++;
      typeLCol(blockNum,1);
      removeType(blockNum - 1);
      removeType(blockNum + 9);
      removeType(blockNum + 19);
    }
    else if(direction == 'ArrowLeft') {
      blockNum--;
      removeType(blockNum + 1);
      removeType(blockNum + 11);
      removeType(blockNum + 22);
      typeLCol(blockNum,1);
    }
    else if(direction == 'ArrowDown') {
      for(let i = 0; i < 4; i++){
        removeTypeCol(blockNum+i);
      }
      blockNum += 10;
      typeLCol(blockNum,1);
    }
    else if(direction == 'ArrowUp') {
      typeL(blockNum,1);
      removeType(blockNum+20);
      removeType(blockNum+21);
      col = false;
      row = true;
    }
  }
}

function playTypeO(direction){
  if(row || col){
    if (direction == 'ArrowRight') {
      removeType(blockNum);
      removeType(blockNum+10);
      blockNum++;
      typeO(blockNum,1);
    }
    else if(direction == 'ArrowLeft') {
      blockNum--;
      removeType(blockNum+2);
      removeType(blockNum+12);
      typeO(blockNum,1);
    }
    else if(direction == 'ArrowDown') {
      for(let i = 0; i < 4; i++){
        removeType(blockNum+i);
      }
      blockNum += 10;
      typeO(blockNum,1);
    }
    else if(direction == 'ArrowUp') {
     return
    }
  }
}

let colorNum = Math.floor(Math.random() * 10);
let randomNum = Math.floor(Math.random() * 4);

function itemAct(direction) {
  // playTypeI(direction);
  // playTypeZ(direction);
  // playTypeL(direction);
  // playTypeO(direction);
  playTypeT(direction);


  // blockType[randomNum](blockNum, colorNum);

  // console.log(blockNum)
  // setInterval(() => {
  //   changedRow = changedRow + oneRow;
  //   if (changedRow < limit) {
  //     blockNum = startCol + changedRow;
  //     blockType[randomNum](blockNum, colorNum);
  //   }
  // }, 1000);
}

function itemRelay() {}

function removePopup() {
  popUp.style.display = 'none';
}

function startGame() {
  itemAct();
  itemRelay();
}
function changeItem() {}

startBtn.addEventListener('click', () => {
  removePopup();
  startGame();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    itemAct('ArrowRight');
  }
  else if (event.key === 'ArrowLeft') {
    itemAct('ArrowLeft');
  }
  else if (event.key === 'ArrowDown') {
    itemAct('ArrowDown');
  }
  else if (event.key === 'ArrowUp') {
    itemAct('ArrowUp');
  }
});

const stopBtn = document.querySelector(".stop-btn");
stopBtn.addEventListener("click", () => {});

function rightKey(key) {
  columnNum = columnNum + j;
  if (key == 'ArrowRight') {
    AddItem(color[colorNum], rowNum + i, columnNum + 1);
    removeItem(rowNum, columnNum);
    console.log(columnNum + 1, columnNum - 1);
    console.log(rowNum, columnNum);
  }
}
