// Модель событий Internet Explorer < 9

(function() {

  var elem = [
    document.getElementsByTagName('body')[0],
    document.getElementsByTagName('button')[0]
  ];

  var customEvent = function(e) {
    e.returnValue = false;
    console.log(e.srcElement.tagName);
  };

  for (let i = 0; i < elem.length; i++) {
    elem[i].attachEvent('onclick', customEvent, false);
  }

})();
