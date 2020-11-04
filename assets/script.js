const INITIAL_BTN = document.querySelector("#initial");
const INITIAL_CONTAINER = document.querySelector(".initial_container");

const CRITERIA_CONTAINER = document.querySelector(".criteria_container");
const CRITERIA_BTN = document.querySelector("#criteria_btn")


INITIAL_BTN.addEventListener("click", function(){
    fadeOut(INITIAL_CONTAINER);
    fadeIn(CRITERIA_CONTAINER);
});

CRITERIA_BTN.addEventListener("click", function(){
    let passwordLength = document.getElementById("length").value;
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numeric = document.getElementById("numeric").checked;
    let special = document.getElementById("special").checked;

    console.log(passwordLength);
    console.log(uppercase);
    console.log(lowercase);
    console.log(numeric);
    console.log(special);

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