const sumCells = document.querySelectorAll('.price');
console.log(sumCells);
let sum = 0;
for(let i = 0; i < sumCells.length; i++) {
    sum = sum + (+sumCells[i].textContent)
}
console.log(sum);
document.querySelector('.sum-result').textContent = sum;

function Discountme () {
disc = sum*0.8;
document.querySelector('.sum-result').textContent=disc;
}