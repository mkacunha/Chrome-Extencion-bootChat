

var cook = document.cookie;
var idUser = cook.indexOf('c_user');

if(cook!=undefined && cook.length > 0) // verificando se o mesmo existe
{




}


if (idUser >= 0){

console.log("logado");

var elemento = document.getElementById('bluebarRoot').querySelectorAll('*'); 

chrome.runtime.sendMessage({todo:"showPageAction"});


}else{

console.log("Deslogado");

}