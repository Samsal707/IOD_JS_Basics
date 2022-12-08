// setName.add()
// setName.delete()
//setName.has("elemet")
//keys 

let usList = ["123", "123", "124", "125", "123", "126", "167", "145"];

let newSetusnLst = new Set();

for (let i = 0; i <= usList.length -1 ; i++){
    newSetusnLst.add(usList[i]);
};

//console.log(newSetusnLst);


//Maps

// mapName.set(key, value)
// key any data type 
// value any data type 
// order is maintaned , values are unique
// trying to insert a new key:value rewrite value if key already in existencs
// key different but can change 
// mapName.has("key") returns a boolean
// mapName.get("key") = value
//for (let i of mapName.key()) to get keys
// for (let key of mapName.values) to get values
// for (let i of mapName.enteries()) to get "key", "value"
// studentname: mark (10 students) ---> update 
    // find the student low and high
    // average score of the class

let studentGroup = new Map();
let students = ["Kraig","Kane", "Justin", "Peter", 
"John", "Kevin", "Shannon"];
students.push("Kate");
students.push("Karen");
students.push("Quinton")


console.log (students);

let marks = [ 45, 89, 77, 50, 90, 76, 78, 90, 66, 67];

for (let i = 0; i < (marks.length - 1); i++){
    studentGroup.set(students[i], marks[i]);

}

console.log(studentGroup)

let lowestMark = 100; 
let highestMark = 0;
let highestmarkStudentName = "";
let lowestMarkStudentName = "";
let sum = 0;
let count = 0;
let averageMark = 0;
let arrayCheck = [];
for (let entry of studentGroup.entries()){
    sum += entry[1]
    count += 1;
    averageMark = sum / count;
    if (entry[1] > highestMark){
        highestMark = entry[1];
        highestmarkStudentName = entry[0]
    }
    if (entry[1] < lowestMark){
        lowestMark = entry[1];
        lowestMarkStudentName = entry[0];
        
    }
    
   console.log(entry) 
}
console.log(highestMark);
console.log(highestmarkStudentName);

console.log(lowestMark);
console.log(lowestMarkStudentName);
console.log(averageMark);



// highestMark = Math.max(...arrayCheck);
// lowestMark = Math.min(...arrayCheck);
// for (let i = 0; i <= (arrayCheck.length - 1); i++){
//     sum += arrayCheck[i];
//     averageMark = sum / arrayCheck.length;
// }
// console.log(lowestMark);
// console.log(highestMark);
// console.log(averageMark)

// for (let values of studentGroup.values){
//     if (values == lowestMark){

//         console.log(` ${studentGroup(key)} has the lowest mark of ${lowestMark}`);
//     }
//     if ((studentGroup(key)) == highestMark){
//         console.log(` ${studentGroup(key)} has the lowest mark of ${HighestMark}`);
//     }
// }

// console.log("The average mark is " + averageMark + "%");