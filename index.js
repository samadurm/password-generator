/*
    Function: handleSubmit
    Description: performs error checking on input and calls
        the function to generate the random password
*/
function handleSubmit(){

    const length = validateLength();
    displayPasswordStrength(length);

    var password = generatePassword(length);
    estimatePasswordTries(length);

    document.getElementById("result").textContent = password;
}

/*
    Function: validateLength
    Description: Checks if password matches the length bounds
        set in index.html. If the length is out of allowed bounds,
        it is set as min or max length accordingly
*/
function validateLength(){
    var length = Number(document.getElementById("length").value);
    const maxLen = Number(document.getElementById("length").max);
    const minLen = Number(document.getElementById("length").min);

    if(length > maxLen){
        alert("Exceeded maximum password length. Generating password of " + maxLen + " characters.");
        length = maxLen;
    } else if(length < minLen){
        alert("Below minimum password length. Generating password of " + minLen + " characters.");
        length = minLen;
    }
    return length;
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
    Function: estimatePasswordTries
    Description: Calculates the number of combinations that the password have 
        given the length
*/
function estimatePasswordTries(length){
    const attemptsText = document.getElementById("numAttempts");
    var combinations = Math.pow(length, 125-33);
    attemptsText.innerHTML = "There are <strong>" + combinations + "</strong> password combinations at length " + length + ".";
}

/*
    Function: displayPasswordStrength
    Description: This rates the password strength based on 
        length, and updates the strength meter
*/
function displayPasswordStrength(length){
    var strength = 0;
    if(length == 6){
        strength = 1;
    } else if(length >= 7 && length < 8){
        strength = 2;
    } else if(length >= 8 && length < 10){
        strength = 5;
    } else if(length >= 10 && length < 12){
        strength = 7;
    } else{
        strength = 10;
    }
    document.getElementById("password-strength").value = strength;
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
        textArea.value = password;
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