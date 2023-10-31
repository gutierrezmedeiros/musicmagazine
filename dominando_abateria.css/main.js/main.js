//const botaoGreen = document.getElementById("#mostra");
//const botaoRed = document.getElementById("#esconde");
// Esse aqui e o botao do conteudo do curso

function mostra (el) {
    document.getElementById(el).style.display = 'block';

}


function esconde (el) { 
    document.getElementById(el).style.display = 'none';

}


function toggle (el) {
    var display = document.getElementById(el).style.display;
    if (display == "none"){

        document.getElementById(el).style.display = 'block';

    } else{

        document.getElementById(el).style.display = 'none';
    }
}

// Esse aqui e o botao do perguntas frequentes

function toggle (el) {
    var display = document.getElementById(el).style.display;

    if (display == "none"){
        document.getElementById(el).style.display = 'block';
    } else{
        document.getElementById(el).style.display = 'none';
    }
}