const filme = require('./informacao.json')
var img = document.getElementById("img1")
var img2 = document.getElementById("img2")
var titulo = document.getElementById("titulo")
var info = document.getElementById("info")
var sinpse = document.getElementById("sinopse")

var num = 1

function proximo(){
    num++
    img.setAttribute('src', './images/filme2')



    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    httpRequest.onreadystatechange = nameOfTheFunction;
    httpRequest.open('GET', 'http://127.0.0.1:5500/index.html', true);
    httpRequest.send();
}