// Функции

function funcDecl(a, b) {
  return (a + b);
}

console.log(funcDecl(3, 4));

let funcExp = function(a, b) {
  return (a + b);
};

console.log(funcExp(3, 4));

// callback
let fun1 = function(callback) {
  let name = 'Hank';
  return callback(name);
};

let fun2 = function(name) {
  return ('Hello, ' + name);
};

console.log(fun1(fun2));

// анонимная самовызывающаяся функция
;(function() {
  console.log('анонимная самовызывающаяся функция');
})();

// массив аргументов
let funcArgs = function() {
  let i, sum = 0;
  for (i = 0; i < arguments.length; i++) sum += arguments[i];
  return sum;
};

console.log(funcArgs(1, 2, 3, 4, 5));
