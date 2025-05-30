console.log("Hello World");
console.log("my name is eshaan");

// window.alert("this is an alert");

// this is a comment

document.getElementById("myH1").textContent = "hello";
document.getElementById("myP").textContent = "i like pasta";


//  variables

let name = "eshaan";
let x = 23;
console.log(x);
x=34;
console.log(x);


const m = 18;
console.log(m);

let age = 21;

console.log("you are "+age+ " years old ");
console.log(typeof age);

console.log(typeof name);


const j  =23;

// functions 

function add(a,b){
    return a+b;
}

console.log(add(4,3));


// arrow functions 

const mul =(a,b) => a*b;
 console.log(mul(5,4));

// arorow functions with nno arguments

const greet = () => "hello";

console.log(greet());

// arrow function with one argument

const square = x => x*x;

console.log(square(6));


// test 

let city = "Paris";
const pi = 3.14;
console.log(typeof city);
console.log(typeof pi);



function greet1 (a){
    return "Hello, "+a;
}
console.log(greet1("Alice"));


const greetArrow = a => "Hello, "+ a;

const square1 = x => x*x;

console.log(square1(5));


let age2 = 25;
const isAdult=age =>true