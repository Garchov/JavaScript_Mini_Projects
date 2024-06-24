

const decreaseBtnRef = document.getElementById("decreaseBtn");
const resetBtnRef = document.getElementById("resetBtn");
const increaseBtnRef = document.getElementById("increaseBtn");
const countLabelRef = document.getElementById("countLabel");

let count = 0;

increaseBtnRef.onclick = function () {
  count++;
  countLabelRef.textContent = count;
  console.log(count);
};
decreaseBtnRef.onclick = function () {
  count--;
  countLabelRef.textContent = count;
  console.log(count);

};

resetBtnRef.onclick = function () {
  count = 0;
  countLabelRef.textContent = count;
  console.log(count);

};
const hoverArea = document.getElementById("hoverArea");



