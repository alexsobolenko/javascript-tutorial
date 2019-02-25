// Создание элементов динамически

(function() {

  let elem = document.createElement('p');
  let content = document.createTextNode('Это динамически созданный элемент');
  elem.appendChild(content);
  elem.id = 'mrDynamic';
  // console.log(elem);

  let wrappedP = document.getElementById('wrapped');

  wrappedP.parentNode.appendChild(elem);
  // wrappedP.parentNode.insertBefore(elem, wrappedP);
  // wrappedP.parentNode.replaceChild(elem, wrappedP);

  wrappedP.parentNode.removeChild(wrappedP);

})();
