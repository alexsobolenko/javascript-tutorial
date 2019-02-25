// Стандартная модель событий

(function() {

  // let btn = document.getElementsByTagName('button');
  // let txt = document.getElementsByTagName('h1')[0];

  // let changeTheme = function() {
  //   txt.className = this.className;
  // };

  // let changeTheme = e => {
  //   txt.className = e.currentTarget.className;
  // };

  // for (let i = 0, len = btn.length; i < len; i++) {
  //   btn[i].addEventListener('click', changeTheme, false);
  // }

  let elem = [
    document.getElementsByTagName('body')[0],
    document.getElementsByTagName('button')[0]
  ];

  let customEvent = e => {
    e.preventDefault();
    console.log(e.currentTarget.tagName);
  };

  let sayHi = () => {
    alert('Hi');
  };

  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', customEvent, false);
    elem[i].addEventListener('click', sayHi, false);
    elem[i].removeEventListener('click', sayHi, false);
  }

})();