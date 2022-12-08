// objects can store functions as one of its properties

let john = {
    name: "John",
    number: 1.23556,
    sayHi: function() {
      return "Hi buddy!";
    }
  };
  
  john.sayHi(); // Hi buddy!

 let str = john.sayHi();

 //console.log(str.toUpperCase());

let n = john.number;

//console.log(n.toFixed(2));

let one = new Number(n);

console.log(typeof one);

let zero = {};

// if (zero) { // zero is true, because it's an object
//   console.log( "zero is truthy!?!" );
// }

// let string = "Hello";
// str.test = 5;


let mcs = 1e-6; 
console.log(1e-6);
console.log(123456..toString(36));

let number = Math.round(1.23456);
console.log(Object.is(NaN, NaN) === true);

let num1 = 3
let num2 = 5

function add2Numbers(){
   

    return num1 + num2;
}

console.log(add2Numbers(5,4));

console.log(Math.round((6.35 * 10) / 10));

function readsNumber (num){

    if ((Number.isFinite(num)) == true){
        console.log (`you have a number ${num}`);
    }else {
        return console.log ("I have returned");
    }
}

readsNumber("kevin");

function randomInterger(min, max){
    let randomMin = min + (Math.random() * (max - min));
    if((randomMin >= min) && (randomMin <= max)) {
        console.log(randomMin);
    }
}

randomInterger(5,8);
