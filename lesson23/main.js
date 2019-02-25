// Кросс-браузерные события

(function() {

  var btn = document.getElementsByTagName('button');
  var txt = document.getElementsByTagName('h1')[0];

  var changeTheme = function(e) {
    eventsObj.preventDefault(e);
    var elem = eventsObj.getTarget(e);
    txt.className = elem.className;
  };

  for (let i = 0; i < btn.length; i++) {
    eventsObj.addEvent(btn[i], 'click', changeTheme);
  }

})();
