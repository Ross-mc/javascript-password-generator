const INITIAL_BTN = document.querySelector("#initial");
const INITIAL_CONTAINER = document.querySelector(".initial_container");

const CRITERIA_CONTAINER = document.querySelector(".criteria_container");
const CRITERIA_BTN = document.querySelector("#criteria_btn")


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

    if (passwordLength < 8 || passwordLength > 128){
        alert('Please enter a length between 8 and 128');
        return
    }


    if (numTrue < 2){
        alert('You must select at least 2 Character Options');
        return
    }





})



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