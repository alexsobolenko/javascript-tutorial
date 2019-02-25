// Циклы

let i;

// for
console.log('for (let i = 0; i < 10; i++)');
for (i = 0; i < 10; i++) {  // инициализация, тест, изменение
  console.log(i);
}

let arr = [ 1, 2, 3 ],
    len = arr.length;

console.log('for (i = 0; i < arr.length; i++)');
for (i = 0; i < len; i++) {
  console.log(Math.pow(arr[i], arr[i]));
}

// for in
let obj = {
  prop1: 123,
  prop2: 'Javascript',
  prop3: { a: 1 },
  prop4: arr
};

console.log('for (i in obj)');
for (i in obj) {
  if (obj.hasOwnProperty(i)) {      //  из-за прототипного наследования
    console.log(i + ': ' + obj[i]);
  }
}

// while
i = 0;
console.log('while (i < 10)');
while (i < 10) {
  console.log(i++);
}

// do-while
i = 0;
console.log('do {} while (i < 10);');
do {
  console.log(i++);
} while (i < 0);

