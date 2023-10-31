let resposta ='';
do {
    resposta = window.prompt('VOCÊ é maior de idade?');
}while (resposta!= 'Sim');

/*let resposta = '';

do {

    resposta = window.prompt('Voce e maior de idade?');
} while (resposta.toLowerCase() != 'sim');  (Deu um erro e fica no loop)


// usando o for e encrementando
for (let i = 0;   i<=10;    i++) {
    console.log(i);
}

// Usando o For com decremento ( separei pra ter uma boa visao)

for ( let i = 10;  i>=1;  i--) {
    console.log(i);
}

/*Usando o forEach // o foreach chama o arrey a function tem como parametro o item do arrey
e exibe no console.*/

/*
['Gutierrez', 'Medeiros'].forEach(function(item) {
    console.log(item);
})*/



// Testando Tabuada na tela

/*let ul = document.querySelector('#tabuada');
let numero = window.prompt('Digite um numero para ver a tabuada');


let i = 1;
while(i<=10) {
    let resultado = numero * i;
    console.log(resultado);
    let li = document.createElement('li');
    li.innerText = `${numero} * ${i} = ${resultado}`;  //template string
    ul.appendChild(li);
    i ++;
}*/

//Aqui deu certo tabem.

/*let vida = 0;

while (vida <=10) {
    console.log(vida);
    vida ++;
}*/



// aqui o laco passa uma vez deu certo.
/*let posso = 30;

do {
    console.log(posso);
    posso++;

}while (posso<10); */


//EXERCICIO DO FERIADO

// Usando o FOR com decremento

/*for(let bola = 10; bola>=0; bola --) {
    console.log(bola);
}
*/
// Usando FOR com incremento

/*for( let bola=0; bola<=10; bola ++) {
    console.log(bola);
}*/

// Usando o WHILE com incremento
/*
let agora =0;
while( agora <=20 ) {
    console.log(agora);
    agora++;
}
*/

// Usando o WHILE com decremento
/*let diga = 100;
while(diga>=0) {
    console.log(diga);
    diga --;

}
*/

//Usando o DO com uma laco passando uma vez.
/*let oi = 10;
do {
    console.log(oi);
    oi ++;
    

}while(oi<10);*/



// WHILE com incremento
/*let oi = 0;

while(oi<=100){
    console.log(oi);
    oi ++;
}*/


// WHILE com decremento
/*let oi = 100;
while(oi>=0) {
    console.log(oi);
    oi--;
}*/


/*let vamos = 10;
do {
console.log(vamos);
vamos ++;
} while(vamos<=10);
*/

/*
let dia =20;

while(dia<=1000) {
    console.log(dia);
    dia++;
}
*/

/*
for(let sei=100; sei>=1; sei --) {
    console.log(sei);
}
*/

//Trabalhando com o forEach.
/*
['meu nome', 'seu nome', 'e voce'].forEach(function (item) {
    console.log(item);

});
*/



['Lista de servico', 'Valor de servico', 'Quantidade', 'Duracao de servico']
.forEach(function(item){
    console.log(item);
});

// Funcao com retorno
/*
function manda (){
    return 'Voce sempre consegue!!!'
}
let armazena =
console.log(manda());
*/

/*
function manda (){
    let n1 = 'gutierrez'
    let n2 = 'medeiros'
    let res = n1+n2
    return  res
}
*/

function manda (){
    let n1 = "Gutierrez"
    let n2 = "Medeiros"
    let res = n1+n2
    
    if(res == "GutierrezMedeiros")
    
    return "Sim, nota Mil"
    else "Nao, esta errado!"

}

console.log(manda());
console.log(manda());

/*
function nada() {
    console.log("olaaaaa!!!!");
}

nada();
*/

//FUNCAO COM RETORNO E IF


function treino() {
    let n1 = 10;
    let n2 = 2;
    let n3 = 1;
  let resultado = n1+n2 * n3;

  if(resultado== 12)
        return "CORRETO"
  else 
        return"ERRADO"

}
console.log(treino());