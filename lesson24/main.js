// Делегирование событий

(function() {

  var changeTheme = function(e) {
    eventsObj.preventDefault(e);
    var elem = eventsObj.getTarget(e),
        colorTheme = elem.getAttribute('data-color'),
        txt = document.getElementsByTagName('h1')[0];
    if (colorTheme !== null) {
      if (e.type === 'click') txt.className = '';
      else txt.className = colorTheme;
    }
  };

  eventsObj.addEvent(document, 'click', changeTheme);
  eventsObj.addEvent(document, 'mouseover', changeTheme);

})();
