/**
 1- Tema sin seleccionar
 2- Su dispositivo esta configurado en dark mode y el usuario no haya cambiado eso
 3- Su dispositvo dark mode. usuario light mode
 4- Dispositivo: light mode. Usuario: No haya cambiado -> light mode
 5- Dispositivo: light mode. Usuario: dark mode -> dark mode
 */

 let checkBoxElement = document.querySelector(".dark-toggle");
 
 
 checkBoxElement.addEventListener("change", function(){
  let bodyElement = document.querySelector("body");
   if(this.checked){
     /**cambiar a dark mode */
     bodyElement.classList.remove("force-light");
     bodyElement.classList.add("force-dark");
   }
   else{
     /**cambiar a light mode */
     bodyElement.classList.remove("force-dark");
     bodyElement.classList.add("force-light");
   }
 });
