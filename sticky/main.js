(function(){
  let pinged = false;
  let nav = document.querySelector(".nav");
 
  let stickyScrollPoint = document.querySelector(".hero-image").clientHeight; //offsetHeight

  function pingToTop(){
    if(pinged) return;
    nav.classList.add('pined');
    pinged = true;
  }

  function unPingegFromTop(){
    if(!pinged) return
    nav.classList.remove('pined');
    pinged = false;
  }

  window.addEventListener('scroll', function(ev){
    if(window.scrollY < stickyScrollPoint) return unPingegFromTop();
    let coords = nav.getBoundingClientRect(); //obtiene la distancia de top, right, left y bottom
    if(coords.top <= 0) return pingToTop() 
    
    unPingegFromTop();
  })
})(); //los parentesis al final de la funcion la ejecutan, esta wrappeada con parentesis para no integrarse al scope global