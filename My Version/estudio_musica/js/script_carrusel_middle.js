const carrusel_middle = document.querySelectorAll('.carrusel1');

let counter1 = 1;
sildeFunCarruselMiddle(counter1);
let timer1 = setInterval(autoslideCarruselMiddle, 8000);

function autoslideCarruselMiddle() {
  counter1 += 1;
  sildeFunCarruselMiddle(counter1);
}

function plusSlideCarruselMiddle(n) {
  counter1 += n;
  sildeFunCarruselMiddle(counter1);
  resetTimerCarruselMiddle();
}

function resetTimerCarruselMiddle() {
  clearInterval(timer1);
  timer1 = setInterval(autoslideCarruselMiddle, 8000);
}

function sildeFunCarruselMiddle(n) {
  let i;
  for (i=0; i<carrusel_middle.length; i++) {
    carrusel_middle[i].style.display = "none";
  }

  if (n > carrusel_middle.length) {
    counter1 = 1;
  }
  if (n < 1) {
    counter1 = carrusel_middle.length;
  }

  carrusel_middle[counter1 - 1].style.display = "block";
}