// Область видимости

let one = 'one'; // глобальная

let func = () => {
  let two = 'two'; // локальная
};

let inner = () => {
  let arr1 = [ 1, 2, 3 ];
  for (i = 0; i < arr1.length; i++) {
    console.log('первый цикл ' + i);
    outer();
  }
};

let outer = () => {
  let arr2 = [ 4, 5, 6 ];
  for (i = 0; i < arr2.length; i++) {
    console.log('второй цикл ' + i);
  }
};

inner();