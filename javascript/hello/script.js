// var name = prompt("T'es qui toi ?", "");
// alert("Hello " + name);

var inputText = document.getElementById('name');
var text = document.getElementsByClassName('text');

inputText.onkeyup = function () {
    text[0].textContent = inputText.value;
};
