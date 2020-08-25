function handleSubmit(){
    var length = document.getElementById("length").value;
    var password = generatePassword(length);

    document.getElementById("result").innerHTML = password;
}

function generatePassword(length){
    var password="";
    for(var i = 0; i < length; i++){
        var randChar = randomASCII(97, 122);
        password += randChar;
    }
    return password;
}

function randomASCII(min, max){
    return String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
}

document.getElementById("submit").addEventListener("click", handleSubmit);

