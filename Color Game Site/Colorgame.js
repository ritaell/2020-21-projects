var buttons = document.getElementsByClassName("colorbutton");
var code = document.getElementById("colorvalue");
var answerMessage = document.getElementById("answer");

function makeColorValue(){
    return Math.round(Math.random()*255)
}

function setButtonColor(button, red, green, blue){
    button.setAttribute('style','background-color: rgb('+ red +', '+ green +', '+ blue +')');
}

function startGame(){
    answerMessage.innerHTML = "";
    var answerButton = Math.round(Math.random()*(buttons.length-1))

    for(var i = 0; i<buttons.length; i++){
        var red = makeColorValue();
        var green = makeColorValue();
        var blue = makeColorValue();

        setButtonColor(buttons[i], red, green, blue);
        if(i == answerButton){
            code.innerHTML =`(${red},${green},${blue})`;
        }

        buttons[i].addEventListener('click',function(){
            if(this == buttons[answerButton]){
                answerMessage.innerHTML="Correct!";
            }

            else{
                answerMessage.innerHTML="Wrong, Try Again...";
            }
        })

    }
}

startGame();
document.getElementById("resetButton").addEventListener('click', startGame)