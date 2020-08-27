/*
    Function: handleSubmit
    Description: performs error checking on input and calls
        the function to generate the random password
*/
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

/*
    Function: generatePassword
    Description: Builds up a random password 1 character at a time
        starting from ASCII value of 33 and going up to 125
*/
function generatePassword(length){
    var password="";
    for(var i = 0; i < length; i++){
        password += randomASCII(33, 125);
    }
    return password;
}

/*
    Function: randomASCII
    Description: returns a random character using ASCII
        value between min and max
*/
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