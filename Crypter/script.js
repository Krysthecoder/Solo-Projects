//add function into the buttons to push the input text to output
//create the array for text

//var for input and out text area in html
let inputValue = document.getElementById("input-El");
let outputValue = document.getElementById("output-El");
const cryptButton = document.getElementById("crypter-buttn");
const uncryptButton = document.getElementById("unccrypter-buttn");
//the index(crypter) array that will contain the letters

const index = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"]

const selector = document.getElementById("selector-el");
let i = 0;
let e  = 0;
//console.log(selector.selectedIndex) log out the selector index
// cryptButton.addEventListener("click", crypterFunction);
// uncryptButton.addEventListener("click", uncrypterFunction);






// function crypterFunction(){
//     let letters = inputValue.value.split('')
//     if(letters[e] != index[i]){
//         for(i = 0; i < index.length; i ++){
//             return i;
//         }
//     }else if(letters[e] == index[i]){
//         console.log(letters[e] +  index[i])
//     }
// }
// function uncrypterFunction(){
//     outputValue.value = inputValue.value;
//     inputValue.value = ""
// }
