// Объект window и BOM (объектная модель браузера)

console.log('window');
console.log(window);

console.log('navigator');
console.log(window.navigator);
console.log(navigator.userAgent);
console.log(navigator.platform);

console.log('screen');
console.log(window.screen);

console.log('location');
console.log(window.location);

console.log('frames');
console.log(window.frames);

console.log('history');
console.log(window.history);

window.alert('alert');
let cnf = window.confirm('confirm');
console.log(cnf ? 'YES' : 'NO');
let prm = window.prompt('prompt');
console.log('Hello ' + prm);
