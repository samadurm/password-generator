function handleSubmit(){
    var length = document.getElementById("length").value;
    var maxLen = document.getElementById("length").max;
    
    if(length > maxLen){
        length = maxLen;
    }
    console.log("Length is " + length)

    var password = generatePassword(length);

    document.getElementById("result").textContent = password;
}

function generatePassword(length){
    var password="";
    for(var i = 0; i < length; i++){
        password += randomASCII(33, 125);
    }
    return password;
}

function randomASCII(min, max){
    return String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
}

document.getElementById("submit").addEventListener("click", handleSubmit);

function copyToClipboard(){
    var password = document.getElementById("result").innerHTML;
    console.log("Generated password " + password)
}