// События

(function() {

  // let elem = document.getElementById('box');

  // elem.onclick = function() {
  //   this.style.backgroundColor = 'yellow';
  // };

  let btn = document.getElementsByTagName('button');
  let txt = document.getElementsByTagName('h1')[0];

  for (let i = 0, len = btn.length; i < len; i++) {
    // btn[i].onclick = function() {
    //   txt.className = this.className;
    // };
    btn[i].addEventListener('click', function() {
      txt.className = this.className;
    });
  }

})();
