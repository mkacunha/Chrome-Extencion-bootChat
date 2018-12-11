window.onload = function(){
document.getElementById('popUp').onclick = function(){

chrome.tabs.executeScript(null,{file: 'script.js'});

chrome.pageAction.onClicked.addListener(function(){

console.log("pegou");

});


}

}



