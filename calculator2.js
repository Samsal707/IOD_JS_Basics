

/*const operation = document.onClick();

let num1 = Alert(document.getElementsByName("Number1").values);
let num2 = document.getElementsByName("Number2").values;

switch(operation){
    case "add()":
       document.getElementById("outPut").innerHTML = String(num1 + num2);
       break;

    case "subtract()":
        document.getElementById("outPut").innerHTML = String(num1 - num2);
       break;
    
    case "multiply()":
        document.getElementById("outPut").innerHTML = String(num1 * num2);
        break;

    case "divide()":
        document.getElementById("outPut").innerHTML = String(num1 / num2);
        break;

    default:
        document.getElementById("outPut").innerHTML = "Output";
}*/


function calculator () {
    let num1 = document.formc.value;
    let num2 = document.getElementById("two").value
    let valuesC = [];
    let sum;
    let inputs = document.getElementById('one');
    for (let input of inputs){
        valuesC.push(input.value);

    }
    let butn = document.getElementsByTagName('button');
    for (let button in butn){
        if (button.onClick == "Add()"){
            sum = valuesC[0] + valuesC[1];
        }
        if (button.onClick == "subtract()"){
            sum = valuesC[0] - valuesC[1];
        }
        if (button.onClick == "multiply()"){
            sum = valuesC[0] * valuesC[1];
        }
        if (button.onClick == "divide()"){
            sum = valuesC[0] / valuesC[1];
        }
    }
    document.getElementById("outPut").innerHTML = String(sum)
}