// Массивы

let arr = new Array(); // 1
arr = [ 11, 'Javascript', { prop1: Math.PI }, [ 1, 2, 3] ]; // 2

arr[7] = 'Ай-яй-яй';

console.log(arr);
console.log(arr[5]);

console.log('arr.length');
console.log(arr.length);

console.log('delete arr[2];');
delete arr[2];
console.log('arr[2]');
console.log(arr[2]);

arr[2] = 'new element';
console.log('arr.splice(2, 1)');
arr.splice(2, 1);
console.log(arr[2]);

let arr2 = [ 1, 2, 3 ];
arr2 = arr.concat(arr2);
console.log(arr2);

console.log('arr2.join()');
console.log(arr2.join(' '));

console.log('arr.push("new push")');
arr.push('new push');
console.log(arr);

console.log('arr.pop()');
arr.pop();
console.log(arr);

console.log('arr2.slice(2, 7)');
console.log(arr2.slice(2, 7));

console.log('arr.sort()');
console.log(arr.sort());
