var mobileMenu = document.querySelectorAll('.mobile-menu');
console.log(mobileMenu);
   // quando usar o selectorAll e so houver uma class e nao varias precisa por o [0] antes do addEventListener
   mobileMenu[0].addEventListener('click',()=>{
     
 
      let hamburger = document.getElementById('hamburger');
     
      if (hamburger.classList.contains('hide')){

         hamburger.classList.add('show');
         hamburger.classList.remove('hide');
      } else{

         hamburger.classList.add('hide');
         hamburger.classList.remove('show');
     

      }
      

   });
     
// Esse e um teste de alert na foto do foguete

   var foguete = document.getElementById('foguete');

   foguete.addEventListener('click', function(){
      alert("Impulsione agora e chegue ao sucesso mais rápido!!")
   })
      
   

/*codigo anterior..
   var mobileMenu = document.getElementsByName('.mobile-menu');
   
   mobileMenu.addEventListener('click',()=> {
   
     
      alert("clicado");
   

});*/

// esse formato eu criei sem por o console recebendo a var!
/*var logo = document.querySelector(".logo");

logo.addEventListener("click", function(){
   
   console.log("clicou agora");
   alert("Voce e bala!!!!");
   


});*/



var logo = document.querySelector(".logo");

logo.addEventListener("click", function(){

   console.log("clicou");

});

//Teste na fodo do spotify
var foto = document.querySelector('.lista__servico-foto');


foto.addEventListener('click',()=>{
   console.log("Fui clicado");
   alert("Todos os serviços estão Disponivéis!")
})

