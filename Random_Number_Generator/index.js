const myButton = document.getElementById("genBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const appearSound = document.getElementById('appearSound')
const dissapearSound = document.getElementById('dissapearSound')

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
    appearSound.play();
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;

  label1.classList.remove("show");
  setTimeout(() => {
    label1.classList.add("show");
  }, 10);
  label2.classList.remove("show");
  setTimeout(() => {
    label2.classList.add("show");
  }, 10);

  label3.classList.remove("show");
  setTimeout(() => {
    label3.classList.add("show");
  }, 10);

  setTimeout(() => {
    label1.classList.remove("show");
    label2.classList.remove("show");
    label3.classList.remove("show");
   dissapearSound.play()

  }, 5000);
};
