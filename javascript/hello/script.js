// var name = prompt("T'es qui toi ?", "");
// alert("Hello " + name);

var inputText = document.getElementById('name');
var text = document.getElementsByClassName('text');
var body = document.querySelector('body');

// Nouvelle méthode
body.addEventListener('mousemove', function (event) {
    console.log(event);
}, false);

// ancienne méthode
// body.onmousemove = function (toto) {
//     console.log(toto);
// };

inputText.onkeyup = writeText;
text[0].onclick = function (myEvent) {
    console.log(myEvent);
};

function writeText() {
    text[0].textContent = inputText.value;
}


