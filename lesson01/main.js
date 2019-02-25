// типы данных

// строка
let str = 'Hulk Hogan';
console.log((typeof str) + ' -> ' + str);

// число (целое)
let num1 = 11;
console.log((typeof num1) + ' -> ' + num1);

// число (десятичное)
let num2 = 3.14;
console.log((typeof num2) + ' -> ' + num2);

// булево
let bool = true;
console.log((typeof bool) + ' -> ' + bool);

// undefined - не указано значение
let undef;
console.log((typeof undef) + ' -> ' + undef);

// null - пустота
let nul = null;
console.log((typeof nul) + ' -> ' + nul);

// объект
let obj = {
  val: 'xxx',
  sayHello: (name) => alert('Hello, ' + name)
};
console.log((typeof obj) + ' -> ' + obj);
