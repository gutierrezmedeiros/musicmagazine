// Essa function esconde o elemento.
function esconde(el) {
    document.getElementById(el).style.display='none';
}

//Essa funcion mostra o elemento.
function mostra(el) {
    document.getElementById(el).style.display = 'block';
}

//Essa function alterna entre mostrar e esconder usando none e block.

function toggle(el) {
    var alterna = document.getElementById(el).style.display;


    if(alterna =="none") {
        document.getElementById(el).style.display ='block';
        
    } else {
        document.getElementById(el).style.display ='none';
        
    }
}





