// DOM (объектная модель документа)

(function() {

  let elems = document.getElementsByTagName('p');
  console.log(elems);

  let classElems = document.getElementsByClassName('paragraph')
  for (let i = 0; i < classElems.length; i++) console.log(classElems[i]);

  let idElem = document.getElementById('four');
  console.log(idElem);

  let elemSelector = document.querySelector('p');
  console.log(elemSelector);

  let elemSelectorAll = document.querySelectorAll('p');
  console.log(elemSelectorAll);

  let elemsInDiv = document.querySelectorAll('div p');
  console.log(elemsInDiv);

  for (let i = 0; i < elems.length; i++) {
    console.log(elems[i].tagName);
    console.log(elems[i].parentNode);
    console.log(elems[i].previousSibling.previousSibling);
    console.log(elems[i].nextSibling.nextSibling);
    console.log(elems[i].nodeName);
    console.log(elems[i].nodeType);
    console.log('------------------');
  }

  console.log(document.querySelector('div').childNodes);
  console.log(document.querySelector('div').children);
  console.log(document.querySelector('div').firstChild);
  console.log(document.querySelector('div').lastChild);
  console.log(document.querySelector('div').innerHTML);
  console.log(document.querySelector('div').innerText);

})();