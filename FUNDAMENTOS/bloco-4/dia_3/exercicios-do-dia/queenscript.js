let queenRollPosition = 4;
let queenColumPosition = 4;

let oponnentRowPosition = 8;
let oponnentColumPosition = 1;

let succefulAttack = false;

if (queenRollPosition === oponnentRowPosition) {
  succefulAttack = true;
}

if (queenColumPosition === oponnentColumPosition) {
  succefulAttack = true;
}

for (let index = 0; index < 8; index += 1) {
  let currentQueenRow = queenRollPosition - index;
  let currentQueenColum = queenColumPosition - index;
  if (currentQueenRow === 0 || currentQueenColum === 0) {
    break;
  }
  if (currentQueenRow === oponnentRowPosition && currentQueenColum === oponnentColumPosition) {
    succefulAttack = true;
  }
}

for (let index = 0; index < 8; index += 1) {
  let currentQueenRow = queenRollPosition + index;
  let currentQueenColum = queenColumPosition - index;
  if (currentQueenRow === 9 || currentQueenColum === 0) {
    break;
  }
  if (currentQueenRow === oponnentRowPosition && currentQueenColum === oponnentColumPosition) {
    succefulAttack = true;
  }
}

for (let index = 0; index < 8; index += 1) {
  let currentQueenRow = queenRollPosition - index;
  let currentQueenColum = queenColumPosition + index;
  if (currentQueenRow === 0 || currentQueenColum === 9) {
    break;
  }
  if (currentQueenRow === oponnentRowPosition && currentQueenColum === oponnentColumPosition) {
    succefulAttack = true;
  }
}

for (let index = 0; index < 8; index += 1) {
  let currentQueenRow = queenRollPosition + index;
  let currentQueenColum = queenColumPosition + index;
  if (currentQueenRow === 9 || currentQueenColum === 9) {
    break;
  }
  if (currentQueenRow === oponnentRowPosition && currentQueenColum === oponnentColumPosition) {
    succefulAttack = true;
  }
}

console.log(succefulAttack);