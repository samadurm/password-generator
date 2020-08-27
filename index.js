function handleSubmit(){
    var length = document.getElementById("length").value;
    var maxLen = document.getElementById("length").max;
    
    if(length < maxLen){
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

/*
    Function: copyToClipboard
    Description: copies the password to the clipboard. This is only
        done if the user clicks after a password is generated
*/
function copyToClipboard(){

    var password = document.getElementById('result').innerText;

    if(password != "Select password length and submit") {
        
        var textArea = document.createElement('textarea');
        textArea.value = str;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px';
        
        // Invisible DOM element is created so that select can be called on it 
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

document.getElementById("submit").addEventListener("click", handleSubmit);