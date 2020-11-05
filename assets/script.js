const INITIAL_BTN = document.querySelector("#initial");
const INITIAL_CONTAINER = document.querySelector(".initial_container");

const CRITERIA_CONTAINER = document.querySelector(".criteria_container");
const CRITERIA_BTN = document.querySelector("#criteria_btn");

const UPPERCASE_ARR = [];

//generates an array of all uppercase latin alphabet characters from the UTF-16 charset

for (let i = 65; i<91; i++){
    let char = String.fromCharCode(i);
    UPPERCASE_ARR.push(char);
};


const LOWERCASE_ARR = [];

for (let i = 97; i<123; i++){
    let char = String.fromCharCode(i);
    LOWERCASE_ARR.push(char);
};

const SPECIAL_ARR = [];

//This generates all ASCII characters that are allowed in a Google Account password. They are not in a nice neat continuous order in the UTF-16 charset so there are 4 four loops to cover them all

for (let i = 33; i<48; i++){
    let char = String.fromCharCode(i);
    SPECIAL_ARR.push(char);
};

for (let i = 58; i<65; i++){
    let char = String.fromCharCode(i);
    SPECIAL_ARR.push(char);
};

for (let i = 91; i<97; i++){
    let char = String.fromCharCode(i);
    SPECIAL_ARR.push(char);
};

for (let i = 123; i<127; i++){
    let char = String.fromCharCode(i);
    SPECIAL_ARR.push(char);
};


const NUMERIC_ARR = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];





// CLICK LISTENERS




INITIAL_BTN.addEventListener("click", function(){
    fadeOut(INITIAL_CONTAINER);
    setTimeout(fadeIn, 600, CRITERIA_CONTAINER);
});

CRITERIA_BTN.addEventListener("click", function(){
    let passwordLength = document.getElementById("length").value;
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numeric = document.getElementById("numeric").checked;
    let special = document.getElementById("special").checked;

    let selectedChars = [];

    let generatedPassword = ''


    let charObj = {
        uppercaseCheck: uppercase,
        lowercaseCheck: lowercase,
        numericCheck: numeric,
        specialCheck: special
    };

    let charValues = Object.values(charObj);

    let numTrue = 0;

    for (let i = 0; i<charValues.length; i++){
        if (charValues[i] === true){
            numTrue++;
        }
    }

    // validation of user inputs

    if (passwordLength < 8 || passwordLength > 128){
        alert('Please enter a length between 8 and 128');
        return
    }


    if (numTrue < 2){
        alert('You must select at least 2 Character Options');
        return
    }

    if (charObj.uppercaseCheck === true){
        selectedChars.push(...UPPERCASE_ARR);
    }

    if (charObj.lowercaseCheck === true){
        selectedChars.push(...LOWERCASE_ARR);
    }

    if (charObj.numericCheck === true){
        selectedChars.push(...NUMERIC_ARR);
    };

    if (charObj.specialCheck === true){
        selectedChars.push(...SPECIAL_ARR);
    };

    //Logic for picking a random number from the array of selected characters and adding to generated passwrod

    for (let i = 0; i<passwordLength; i++){
        let randIndex = Math.floor(Math.random() * selectedChars.length);
        let char = selectedChars[randIndex];
        generatedPassword += char;
    }








})





// Fading functions

function fadeOut(element1){
    var opacityValue = 1;

    var timer = setInterval(function(){
        if (opacityValue <=0.05){
            clearInterval(timer);
            element1.style.display = 'none'
        }
        element1.style.opacity = opacityValue;
        opacityValue -= opacityValue * 0.05
    }, 10)
};

function fadeIn(element){
    var opacityValue = 0;
    element.style.display = 'block'
    var timer = setInterval(function(){
        if (opacityValue >=1){
            clearInterval(timer);
            
        }
        element.style.opacity = opacityValue;
        if (opacityValue === 0){
            opacityValue += 0.05;
        } else{
            opacityValue += opacityValue * 0.05;
        }
    }, 10)
}