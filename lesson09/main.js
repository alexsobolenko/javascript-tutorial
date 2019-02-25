// Объекты

let obj = new Object(); // 1
obj = {                 // 2
  prop1: 'Javascript',
  prop2: 123.456,
  prop3: true,
  prop4: function() {
    console.log(this.prop1)
  }
};

console.log(typeof obj);
console.log('obj.prop1');
console.log(typeof obj.prop1);
console.log(obj.prop1);
console.log('obj.prop2');
console.log(typeof obj.prop2);
console.log(obj.prop2);
console.log('obj.prop3');
console.log(typeof obj.prop3);
console.log(obj.prop3);
console.log('obj.prop4()');
obj.prop4();

console.log('obj.undef');
console.log(obj.undef);
console.log('obj.undef || "name"');
console.log(obj.undef || 'name');

obj.prop2 = 234.567;
obj.prop5 = 'ReactJS';
console.log(obj);

console.log('delete obj.prop3');
delete obj.prop3;
console.log(obj);
