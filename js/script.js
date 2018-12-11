
if (document.getElementById('fundo') == null){

var div= document.createElement( 'div' );
div.setAttribute( 'id','fundo' );
//document.body.appendChild( div ).fadeIn(500);


$(div).hide().appendTo(document.body).fadeIn(500);

$('#fundo').append('<div class="topo">totpo</div>');


} else {

var node = document.getElementById('fundo');

node.parentNode.removeChild(node);

}



