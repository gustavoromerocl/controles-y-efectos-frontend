/**
 1- Tema sin seleccionar
 2- Su dispositivo esta configurado en dark mode y el usuario no haya cambiado eso
 3- Su dispositvo dark mode. usuario light mode
 4- Dispositivo: light mode. Usuario: No haya cambiado -> light mode
 5- Dispositivo: light mode. Usuario: dark mode -> dark mode
 */

 isUsingDarkMode();
 let checkBoxElement = document.querySelector(".dark-toggle");
 
 checkBoxElement.checked = isUsingDarkMode();
 
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

 function setInitialValueForColorSheme(){

 }

 function isUsingDarkMode(){
   let bodyElement = document.querySelector("body");

   let bodyStyle = getComputedStyle(bodyElement);
   let bodyBackgroundColor = rgb2hex(bodyStyle.backgroundColor);
   let darModeBgColor = '#0D1BE';

   return bodyBackgroundColor === darModeBgColor
 }

 function rgb2hex(rgb){
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x){
  return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return ("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase();
  }