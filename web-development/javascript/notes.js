const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((n) => n >= 0); //if elemnt is greater or equal to 0
console.log(filtered);

const items = filtered.map((n) => '<li>' + n + '</li>');
console.log(items);

//var a = 10;
function f1() {
  var a = 10;
}
//console.log(a); --> produces error message in output

for (let i = 0; i < 3; i++) {
  console.log(i);
}
//console.log(i); --> produces error message in output

{
  const x = 2;
  console.log(x);
}
//console.log(x); --> produces error message in output

//hoisting == able to define a variable before its declaration
// var --> yes to hoisting, let --> no to hoisting, const --> no to hoisting
