const textArea = document.querySelector(".text-area");
const encrypted = document.querySelector(".encrypted");

function btnEncrypt(){
    const encryptedText = encrypt(textArea.value);
    encrypted.value = encryptedText;
    textArea.value = "";
    encrypted.style.backgroundImage = "none";
}

function encrypt(stringCrypted){
    let mainArray = [["e" , "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringCrypted = stringCrypted.toLowerCase();

    for(let i = 0; i < mainArray.length; i++){
        if(stringCrypted.includes(mainArray[i][0])){
            stringCrypted = stringCrypted.replaceAll(mainArray[i][0], mainArray[i][1]);
        }
    }
    return stringCrypted;
}
function btnDecrypt(){
    const encryptedText = decrypted(textArea.value);
    encrypted.value = encryptedText;
    textArea.value = "";
}
function decrypted(stringDecrypted){
    let mainArray = [["e" , "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase();

    for(let i = 0; i < mainArray.length; i++){
        if(stringDecrypted.includes(mainArray[i][1])){
            stringDecrypted = stringDecrypted.replaceAll(mainArray[i][1], mainArray[i][0]);
        }
    }
    return stringDecrypted;
}
function copy() {

    var input = document.getElementById("encrypted").value;
    navigator.clipboard.writeText(input);
    alert("You copied: " + input);
}
