//https://www.figma.com/file/RI9GMXnTkSWPoezThjtmP5/basketball-scoreboard-scrimba-project-(Community)?type=design&node-id=0%3A1&mode=design&t=8P92KUHawi3inf7g-1

let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");


function scoreHome1(){
    var result = parseInt(homeScore.innerText) + 1;
    homeScore.innerHTML = result;
}

function scoreHome2(){
    var result = parseInt(homeScore.innerText) + 2;
    homeScore.innerText = result;
}
//function scoreHome1(){
//    let test2 = parseInt(document.getElementById("homeScore").textContent);
//    let x = test2 + 1;
//    let y = document.getElementById("homeScore");
//    y.textContent = x;
//    console.log(x)
//}
// function works well, but the values are store differently and are not working with the other functions, 
// the method of declaring an internal variable with the html been parsedInt, allow to reduse the workload 
//let stringToValue = parseInt(homeScore.innerHTML);
//function scoreHome2(){
//    stringToValue += 1;
//    homeScore.innerHTML = stringToValue;
//}

//function scoreHome2(){
//   var result = parseInt(homeScore.innerHTML) + 2;
//    document.getElementById('homeScore').innerHTML = result
//}
function scoreHome3(){
    var result = parseInt(homeScore.innerHTML) + 3;
    document.getElementById('homeScore').innerHTML = result
}
function reset(){
    document.getElementById("homeScore").textContent = 0;
}

function scoreGuest1(){
    var result = parseInt(guestScore.innerHTML) + 1;
    //document.getElementById('homeScore').innerHTML = result//found in stackoverflow
    guestScore.innerText = result;
}
function scoreGuest2(){
    var result = parseInt(guestScore.innerHTML) + 2;
    document.getElementById('guestScore').innerHTML = result
}
function scoreGuest3(){
    var result = parseInt(guestScore.innerHTML) + 3;
    document.getElementById('guestScore').innerHTML = result
}
function resetGuest(){
    document.getElementById("guestScore").textContent = 0;
}

//let test1 = parseInt(document.getElementById("homeScore").textContent);
//console.log(test1)
//if(test1 === 2){
//    console.log("worked-out" + test1)
//}
