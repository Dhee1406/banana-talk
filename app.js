var buttonTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")
var outPut = document.querySelector("#output");


buttonTranslate.addEventListener("click", function clickEventHandler(){
    outPut.innerText = "ajajajaj " + textInput.value;
});



