/**
 1- Tema sin seleccionar
 2- Su dispositivo esta configurado en dark mode y el usuario no haya cambiado eso
 3- Su dispositvo dark mode. usuario light mode
 4- Dispositivo: light mode. Usuario: No haya cambiado -> light mode
 5- Dispositivo: light mode. Usuario: dark mode -> dark mode
*/

const colorSchemeLSKey = "mp--color--scheme";
 readSchemeFromLS();
 isUsingDarkMode();



 console.log(colorSchemeLSKey);
 let checkBoxElement = document.querySelector(".dark-toggle");
 
 
 console.log(isUsingDarkMode());
 checkBoxElement.checked = isUsingDarkMode();
 
 checkBoxElement.addEventListener("change", function(){

   if(this.checked){
     /**cambiar a dark mode */
     changeToDarkMode();
     
   }
   else{
     /**cambiar a light mode */
     changeToLightMode();
     
   }
 });

 function changeToLightMode(){
  let bodyElement = document.querySelector("body");
  bodyElement.classList.remove("force-dark");
  bodyElement.classList.add("force-light");
  setColorSchemeLS("light");
  
 }
 function changeToDarkMode(){
  let bodyElement = document.querySelector("body");
  bodyElement.classList.remove("force-light");
  bodyElement.classList.add("force-dark");
  setColorSchemeLS("dark");
 }

 function readSchemeFromLS(){
   let colorScheme = getColorSchemeLS();
   if(!colorScheme) return

   if(colorScheme === "light"){
    changeToLightMode();
   }else{
    changeToDarkMode();
   }
 }

 function setColorSchemeLS(value){
   try{
    window.localStorage.setItem(colorSchemeLSKey, value)
   }catch{
    console.log("Error en LS");
   }
 }
 function getColorSchemeLS(){
  try{
    return window.localStorage.getItem(colorSchemeLSKey)
   }catch{
    console.log("Error en LS");
   }
 }


 function isUsingDarkMode(){
   let bodyElement = document.querySelector("body");

   let bodyStyle = getComputedStyle(bodyElement);
   let bodyBackgroundColor = rgb2hex(bodyStyle.backgroundColor);
   let darModeBgColor = '#0D1B1E';
   console.log(bodyBackgroundColor,darModeBgColor)

   return bodyBackgroundColor === darModeBgColor
 }

 function rgb2hex(rgb){
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x){
  return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return ("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase();
  }