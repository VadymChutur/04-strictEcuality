// let a = 35;
// //perevirka na rivnist == surova rivnist ===
// if (a > 0 && a <= 20) {
//   console.log('1');
// } else if (a > 20 && a <= 30) {
//   console.log('2');
// } else if (a > 30 && a <= 40) {
//   console.log('3');
// } else {
//   console.log('false');
// }

//generuevo vupadkove chislo
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

console.log(randomInteger(1, 100));

let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);

const userNam = document.querySelector('#user-num');
console.log(userNam);
const btn = document.querySelector('#btn');
console.log(btn);
btn.addEventListener('click', checkNum);

function checkNum() {
  let num = userNam.value;
  num = parseInt(num);
  console.log(num);
  if (!isNaN(num)) {
    if (num === randomNumber) {
      alert('Correct');
      location.reload();
    } else {
      alert('Incorrect');
    }
  } else {
    alert('Input correct number');
  }
}
