let screen1Text = document.getElementById("screen1");
let screen2Text = document.getElementById("screen2");

//let value1 = parseInt(screen1Text.innerHTML);
//let value2= parseInt(screen2Text.innerHTML);
let value1;
let operator;
let values;

let numbers = [0,1,2,3,4,5,6,7,8,9];
let operators = ["+", "-", "*", "/" ]


// this basically add the numbers added as conditions in the html, and used as index searcher
function addScreen(i){
    console.log(numbers[i])
    screen1Text.innerHTML += numbers[i]
}
//simple reset function
function reset(){
    screen1Text.innerHTML = " ";
    screen2Text.innerHTML = " ";
}

function addOperator(i){
    value1 = parseInt(screen1Text.innerHTML);
    screen2Text.innerHTML = value1;
    screen1Text.innerHTML = " ";
    operator = operators[i];
    let values = [value1, operator];
    return values;
}

function test(){
    num1 = parseInt(value1);
    num2 = parseInt(screen1Text.innerHTML);
    if(operator === "+"){
        let result = num1 + num2;
        screen1Text.innerHTML = result;
        screen2Text.innerHTML = " ";
    }else if(operator === "-"){
        let result = num1 - num2;
        screen1Text.innerHTML = result;
        screen2Text.innerHTML = " ";
    }else if(operator === "*"){
        let result = num1 * num2;
        screen1Text.innerHTML = result;
        screen2Text.innerHTML = " ";
    }else if(operator === "/"){
        let result = num1 / num2;
        screen1Text.innerHTML = result;
        screen2Text.innerHTML = " ";
    }
}

