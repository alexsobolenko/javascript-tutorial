// Анимация и таймеры

(function() {

  // let startTimer = () => console.log('Таймер сработал');
  // let timer = setTimeout(startTimer, 3000);
  // clearTimeout(timer);

  // let delay = 24;
  // let i = 0;
  // let animTimer = () => {
  //   let elem = document.getElementById('circle');
  //   let bottom = elem.offsetTop;

  //   if (i < 30) {
  //     setTimeout(animTimer, delay);
  //     elem.style.top = (bottom + 20) + 'px';
  //   }
  //   i++;
  // };
  // let at = setTimeout(animTimer, delay);

  // let delay = 24;
  // let i = 0;
  // let animInterval = () => {
  //   let elem = document.getElementById('circle');
  //   let bottom = elem.offsetTop;
  //   if (i < 30) elem.style.top = (bottom + 15) + 'px';
  //   else clearInterval(ai);
  //   i++;
  // };

  // let ai = setInterval(animInterval, delay);

  let delay = 10;
  let i = 0;
  let twoWaysAnimation = (pixels) => {
    let elem = document.getElementById('circle');
    let bottom = elem.offsetTop;
    if (((pixels > 0) && (bottom > 600)) || ((pixels < 0) && (bottom <= 50))) {
      clearInterval(tt);
      tt = setInterval(() => twoWaysAnimation(pixels * (-1)), delay);
    }
    elem.style.top = (bottom + pixels) + 'px';
  };
  let tt = setInterval(() => twoWaysAnimation(2), delay);

})();