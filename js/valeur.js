let a = 2;
a = a - 1;
console.log("var a doit être à 1 : " + a);

a++;
console.log("var a doit être à 2 : " + a);

let b = 8;
b += 2;
console.log("var b doit être à 10 : " + b);

let c = a + b * b;
console.log("var c doit être à 102 : " + c);

let d = a * b + b;
console.log("var d doit être à 30 : " + d);

let e = a * (b + b);
console.log("var e doit être à 40 : " + e);

let f = a * b / a;
console.log("var f doit être à 10 : " + f);

let g = b / a * a;
console.log("var g doit être à 10 : " + f);