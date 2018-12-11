//AQUI INCLUI A DIV FUNDO # INICIO
if (document.getElementById('fundo') == null){

//SE NAO EXISTIR A DIV APLICA ESSA CONDICAO # INICIO

var div= document.createElement( 'div' );
div.setAttribute( 'id','fundo' );

$(div).hide().appendTo(document.body).fadeIn(500);

var elemento   = document.getElementById('bluebarRoot').querySelectorAll('*'); 
var fotoPerfil = document.getElementsByClassName('_2qgu')[0].src;
var User       = document.getElementsByClassName('_1vp5')[0].innerText;

$('#fundo').append('<div id="topo"><div id="foto"></div><div id="box-esquerdo"></div><div id="iconConfig"><img src="http://i65.tinypic.com/2nk3q0n_th.jpg" width="30" height="30"></div></div><div id="corpoPOP"></div><div id="footerPOP"></div>');

var img = document.createElement("IMG");
img.src = fotoPerfil;
document.getElementById('foto').appendChild(img);

$('#box-esquerdo').append('<div id="nomeUSer"></div>');

document.getElementById('nomeUSer').innerHTML += User;

$('#corpoPOP').append('<div id="userContato"></div><div id="MsnCampo"></div>');
$('#footerPOP').append('');

 //SE NAO EXISTIR APLICA ESSA CONDICAO # FIM
 //AQUI A ONDE FUNCIONA O BOTCHAT # É CRIADA UMA FUNCTIO 


 function carrega(){

 	let lista = document.querySelector( '[aria-live="polite"]' );

 	if(lista === null){


 	}else{

 		var lista_a = lista.getElementsByTagName('a');
 		var user_link = lista_a[0].dataset.href;

 		if(user_link === null){

 			console.log('vc não possui mensagem');
 		}else{

 			var link_a = lista.querySelector( '[role="link"]' )

 			PegaMessenger(link_a);





 		}
 	}
 }

 window.setInterval(carrega, 1000); 

 function PegaMessenger(linkUser){


 	if(linkUser === null){

 		console.log("nao existe o link");

 	}else{

 		linkUser.click();
 		var urlCompleta = document.URL;

    //console.log(urlCompleta);
    
    var NomeUsuarioHTML = document.getElementById('js_6');
    var UserNomeTesto = NomeUsuarioHTML.querySelector( '[class="_3oh-"]' ).innerText;
    var tagsMensagem  = document.getElementsByClassName('_58nk');
    var UltimaMensagem = tagsMensagem[tagsMensagem.length - 1].innerText;
    //console.log(UltimaMensagem);
    ResponderTodos(UserNomeTesto,UltimaMensagem);

}

}

function ResponderTodos(usuario,mensagem){

if(mensagem === null){

console.log('nao existe mensagem');

}else{

var mensagemMinuscula = mensagem.toLowerCase()


if(mensagemMinuscula === "oi")





var seletor = document.querySelector('._4rv3');
seletor.focus();
var node    = seletor.querySelector("._1p1t");
var span    = seletor.querySelector('span');

if (node.parentNode) {
  node.parentNode.removeChild(node);
}

span.textContent = "<span data-text='true'>oi</span>";

var campoBTN = seletor.querySelector('._4rv4');

var curtir = seletor.querySelector('._4rv9');

if (curtir.parentNode) {
  curtir.parentNode.removeChild(curtir);
}

$('._4rv4').append('<a data-hover="tooltip" data-tooltip-content="Pressione Enter para enviar Pressione Shift + Enter para adicionar um novo parágrafo" class="_30yy _38lh _39bl" role="button" href="#" id="js_47">Enviar</a>');


var btnEnviar  = seletor.querySelector('[data-hover="tooltip"]');

btnEnviar.click();


//seletor.innerHTML = '<div aria-label="Nova mensagem" class="_4rv3" role="region"><div class="_5irm"><div class="_kmc navigationFocus" role="presentation"><div class="_3-8x _3oh-"><div tabindex="-1"><div class="_5rp7 _5rp8"><div class="_5rpb"><div aria-autocomplete="list" aria-controls="js_27" aria-describedby="js_1" aria-expanded="false" aria-label="Digite uma mensagem..." class="notranslate _5rpu" contenteditable="true" role="combobox" spellcheck="true" tabindex="0" style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;"><div data-contents="true"><div class="" data-block="true" data-editor="bte7m" data-offset-key="c2qf7-0-0"><div data-offset-key="c2qf7-0-0" class="_1mf _1mj"><span data-offset-key="c2qf7-0-0"><span data-text="true">ii</span></span></div></div></div></div></div></div></div><div class="_5ca7" id="js_1">Conversa com <span>Vendedor Lider</span>. Atualizada Sexta por <span>Vendedor: <span>Cala</span></span></div></div></div><div class="_4rv4"><ul class="_39bj"><li class="_39bk"><form action="https://upload.facebook.com/ajax/mercury/upload.php" class="_vzk _4uld" title="Adicionar arquivos" method="post"><input type="hidden" name="attach_id"><input type="hidden" name="images_only" value="false"><div class="_m _4q60 _3rzn _6a" data-testid="photo_upload_button"><a class="_4q61 _5f0v _509v _30yy _260u" tabindex="-1" href="#"><i class="_5vn8" alt="Câmera"></i><input type="file" class="_260t _n _2__f _4e5e" data-testid="photo_input" name="attachment[]" multiple="" accept="*" title="Adicionar arquivos"></a></div></form></li><li><a class="_30yy _4rv6 _39bk" role="button" href="#"></a></li><li><div style="display: none;"><form action="https://upload.facebook.com/ajax/mercury/upload.php" class="_vzk _4uld" title="Adicionar arquivos" method="post"><input type="hidden" name="attach_id"><input type="hidden" name="images_only" value="false"><div class="_m _4q60 _3rzn _6a" data-testid="photo_upload_button"><a class="_4q61 _5f0v _509v" tabindex="-1" href="#"><i class="_509w" alt="Câmera"></i><input type="file" class="_n _2__f _4e5e" data-testid="photo_input" name="attachment[]" multiple="" accept="*" title="Adicionar arquivos"></a></div></form></div><a class="_30yy _yht _39bk" role="button" href="#"></a></li><li><a class="_30yy _5s2p _39bk" role="button" href="#"></a></li><li><a class="_4rv7 _39bk _30yy" role="button" href="#"></a></li><li></li><li><a class="_39bk _30yy _4ce_" role="button" href="#"></a></li><a class="_4rv5 _39bk" role="button" href="#"></a></ul><a data-hover="tooltip" data-tooltip-content="Pressione" class="_30yy _38lh _39bl" role="button" href="#">Enviar</a></div></div></div>';

//var campo = document.querySelector( '[data-text="true"]' );
//campo.innerHTML = "teste";
console.log(btnEnviar);





/*var seletor = document.querySelector('._4rv3');
var span = pegaCampoMensagem.querySelector('span');

seletor.click();

span.innerHTML = "<span data-text='true'></span>";

var add = span.querySelector('span');
var textoo = "oi fala ae";
add.click();
add.innerText = textoo;


    





//pegaCampoMensagem.innerHTML = '<span data-offset-key="entv9-0-0"><span id="textoMSN" data-text="true"></span>';

//addMensagem.innerText = "mensagem oi";

//var btnEnviar = document.querySelector( '[data-hover="tooltip"]' );
//btnEnviar.click();
*/
	




}



}



//AQUI A ONDE FUNCIONA FIM DA FUNCTION BOTCHAT 


} else {

	//SE EXISTIR A DIV APLICA ESSA CONDICAO # INICIO

	var node = document.getElementById('fundo');

	node.parentNode.removeChild(node);

   //SE EXISTIR A DIV APLICA ESSA CONDICAO # FIM
}



