// Boolean, null, undefined

// boolean
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(0));

console.log(Boolean("Javascript"));
console.log(Boolean(3.14));

//undefined
let obj = { param: 'Angular' },
    arr = [ 1, 2, 3 ],
    undef,
    fun = (arg) => console.log(arg);

console.log(undef);
console.log(obj.undef);
console.log(arr[100]);
fun();
