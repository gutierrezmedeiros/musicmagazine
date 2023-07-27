// aqui e o teste de muda acor do texo para verde.
console.log(texto);

texto.addEventListener("click", function () {

   console.log(this);
   this.style.color = "Green";
   // this.style.display = "none";
})





// aqui o do menu da pagina

class MobileNavBar {
   constructor (mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navlinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
}
addClickEvent(){
   this.mobileMenu.addEventListener("click", () => console.log("oiiiiiii"));
}
init () {
   if(this.mobileMenu) {
      this.addClickEvent();
   }
   return this;
}

}

const mobileNavBar = new MobileNavBar (
   ".mobile-menu",
   ".cabecalho__menu-lista",
   ".cabecalho__menu-item",
);
mobileNavBar.init();