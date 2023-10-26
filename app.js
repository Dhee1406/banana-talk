var buttonTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")
var outPut = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURl(text){
    return serverURL + "?text=" + text
}

buttonTranslate.addEventListener("click", function clickEventHandler(){
    //outPut.innerText = "ajajajaj " + textInput.value;
    var inputText = textInput.value;
    fetch(getTranslateURl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outPut.innerText = translatedText;
    })

});

//buttonTranslate.addEventListener("click", getTranslateURl)

