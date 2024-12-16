const carrusel = document.querySelectorAll('.carrusel');
const dot = document.querySelectorAll('.dot');

let counter = 1;
sildeFun(counter);
let timer = setInterval(autoslide, 8000);

function autoslide() {
  counter += 1;
  sildeFun(counter);
}

function plusSlide(n) {
  counter += n;
  sildeFun(counter);
  resetTimer();
}

function currentSlide(n) {
  counter = n;
  sildeFun(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}

function sildeFun(n) {
  let i;
  for (i=0; i<carrusel.length; i++) {
    carrusel[i].style.display = "none";
  }
  for (i=0; i<dot.length; i++) {
    dot[i].classList.remove('active');
  }
  if (n > carrusel.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = carrusel.length;
  }

  carrusel[counter - 1].style.display = "block";
  dot[counter - 1].classList.add('active');
}