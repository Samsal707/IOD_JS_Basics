
function getFullName (firstname, surname) {
    console.log(`Your full name ${firstname} ${surname.toUpperCase()}`);
}

//getFullName("Robert", "Mugabe");



// student 1 and 2 objects check grade and list orderly according to grade
//add() can add strings and add numbers 


function add(a, b){
    if ((typeof a == "number")  && (typeof b == "number")){
        return sum = a + b;

    }if (typeof a != typeof b){
        return (`not of 
        the same type: a is of type ${typeof a}  and b is of type ${typeof b} `);
    }if ((typeof a == "string") && (typeof b == "string")){
        return (`Both are of the string type: ${a + " " + b}`);
    }

}
        
console.log(add("Bharth", "NP"));

console.log(add(10, 5));

console.log(add("Bharth", 10));