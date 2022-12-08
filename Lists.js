/*let numberList = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numberList.length; i++) {

    if (numberList[i] === 5) {
        console.log(numberList[i]);
    }
}*/

// push() add element the end of the list; list.push()
//pop() delete the last element; list.pop()
//shift() delete element at the beginging of the element
// unshift() insert the first element: 

// ex: List = [ weekdays..]

let daysOfWeek = ["mon", "tue", "wed", "thur", "fri", "sat", "sun" ];

for (let i = 1; i < daysOfWeek.length; i++){
    console.log(`Day ${i} is ${daysOfWeek[i - 1]}`);
};
// for loop to print the days
//list2 = [] and add the months into list 

//let autoMonths = [];

//for (let i = 0; i < 12; 1++) {

//}

let monthsList = ['January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let newMList = [];

for ( i = 0; i < monthsList.length; i++) {
    newMList.push(monthsList[i]);
}

console.log(newMList);

newMList.pop();


console.log(newMList);

newMList.push("December");

newMList.shift();

console.log(newMList);

newMList.unshift("Jan");

console.log(newMList);




// vaccination que 
// entering que first lives que first  deque
// enters last last to exit enque
//number of persons in que = functions
//getPerson at end of que  or begining of que 
// getperson at end of que
//getperson at the begining 
//get number of people  in que
// number in que restricted to 10 

let vaccineQue = [];
 
function checkIn(number){
    for (let i = 1; i < number; i++){
        let person = prompt("Pease enter names");
        vaccineQue.push(person);
    }
    return vaccineQue;

}  

function checkSpace(vaccineQue){
    if (vaccineQue.length >= 10){
        return(`Sorry we have no Space to take`);
        
    } else {
        return(`We have space for ${10 - vaccineQue.length} people`);
    }
}



function  enQdeQ (vaccineQue) {
    for (let i = 1; i < vaccineQue.length; i++){
        vaccineQue.push("P" + i);
    }
    return `The first person in the que is ${vaccineQue[0]} and 
    the last person is ${vaccineQue[vaccineQue.length - 1]}`
}





//console.log(checkNumber(10));

//console.log(checkSpace(5));

//console.log(enQdeQ(6))


// this code can be contained within  an object 
// let vaccine 


let styles = ["Jazz" , "Blues" ];

styles.push("Rock-n-Roll");

styles.splice((styles.length +1)/2, "classics");

console.log(styles)


let numbers = [2, 7, 3, 11, 15];
let target = 9;
for (let i = 0; i < numbers.length -1; i++){
    for (let j = 1; j < numbers.length - 1;j++){
        if ((numbers[i] + numbers[j]) == target) {
            console.log(`the target reached by ${numbers[i]} and ${numbers[j]}`);


        }else{
            break;
        }
   
    };
}



