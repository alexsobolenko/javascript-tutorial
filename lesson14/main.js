// Замыкание

let firstFunc = function() {
  let index = 5;
  return function() {
    return index;
  };
};

let secondFunc = function() {
  let index = 15;
  console.log(firstFunc()());

  let oldIndex = firstFunc()();
  if (index > oldIndex) console.log('Больше!!');
};

secondFunc();