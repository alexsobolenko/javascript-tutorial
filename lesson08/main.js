// Преобразования типов
console.log(typeof String(123));
console.log(typeof Number('123'));
console.log(typeof Boolean(123));

console.log(typeof (5 + '1'));
console.log(typeof (Math.PI + ''));
console.log(typeof (+'12345'));
console.log(typeof (!!'12345'));

console.log(+true);
console.log(+false);

let num = 999;
console.log('num.toString()');
console.log(num.toString());
console.log(typeof num.toString());

let str = '123.45';
console.log('parseInt(str)');
console.log(parseInt(str));
console.log(typeof parseInt(str));
console.log('parseFloat(str)');
console.log(parseFloat(str));
console.log(typeof parseFloat(str));
