let student1 = {
    firstname: "Robert",
    surname: "Mugabe",
    grade: 40,

};

let student2 = {
    firstname: "Joe",
    surname: "Mahela",
    grade: 85,
}

if (student1.grade > student2.grade ) {
    console.log(` ${student1.firstname} 
    is the top student with a grade of ${student1.grade} percent`);
} else {
    console.log(`${student2.firstname} 
    is the top student with a grade of ${student2.grade} percent`); 
}
