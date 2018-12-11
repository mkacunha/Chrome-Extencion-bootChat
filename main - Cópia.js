window.onload = function(){

   

document.getElementById('button').onclick = function(){

chrome.tabs.getSelected(null, function(tab) {

   console.log(tab);

    chrome.tabs.executeScript(null,{

      //code: "var items = document.querySelectorAll('.homeSideNav'); console.log(items);"

      code: "var elemento = document.getElementById('userNav').querySelectorAll('*'); var resultado = elemento[1].dataset.navItemId;"
      
    }, function callback(data){

       chrome.tabs.executeScript(null,{file: 'js/popup.js'});

       console.log(data);
       //document.getElementById("result").innerHTML = resultado;

    });

  
    
    
});







      

        /*chrome.tabs.executeScript(null,{
        
        //code: "console.log('Funcionou');"

       //code: "document.body.style.background = 'green';"

       //code: "console.log(window.localStorage.getItem('marketplaceLoggingBookmarkLogTimestamp'));"

       code: "console.log(document.cookie('c_user'));"

      });*/






}
}
