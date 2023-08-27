// Testando
function sam ( a, b) {
    return a + b
}
 
// transformando em arrow function
// 1 retiramos o nome function
// 2  atribue a uma variavel Constant
// 3 retiram se as chaves 
// 4 retira a instrucao return poque : tudo depois da arrow function ( as setas)
//e assumido como RETORNO


const sam = (a , b) => a + b;



    
function identidade ( nome , sobrenome) {
    return nome + sobrenome;
}

// transformando em arrow function

const identidade = ( nome , sobrenome) => nome + sobrenome



// Funcoes anonimas de callback


document.addEventListener('click', function ( ) {
    console.log('clicked');
});


// Transformado em arrow function
document.addEventListener('click', () => console.log('clicked'));


// function normal

numeros.reduce(function(total,num) {
    return total * num;
}, 1);

// transform in Arrow function

numeros.reduce((total, num) => total* num , 1);



// transform in Arrow function

numeros.reduce((total, num) => total* num , 1);

// Transform in function 


numeros.reduce(function (total, num){
    return total * num;

}, 1);

//let i = 0;

//while (i>10 ) {
    //console.log(i);
    //i++
//}

// Temos que testar mais uma vez esse codigo de baixo

/*let resposta = '';

do {

    let resposta = window.prompt('Voce e maior de idade?');
} while (resposta.toLowerCase() != 'sim');*/




