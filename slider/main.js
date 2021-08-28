class Slider{
  constructor(selector){
    this.slider = document.querySelector(selector);
    this.interval = null;
    this.contador = 0;
    this.start()
  }

  start(){
    this.interval = window.setInterval(this.move, 5000)
  }

  move = () => {
    let itemsCount =  this.slider.querySelectorAll(".container > *").length;
    this.contador++;
    if (this.contador > itemsCount - 1) this.contador = 0;
    this.moveTo(this.contador)
  }

  moveTo(index){
    let left = index * 100;

    this.slider.querySelector(".container").style.left = `-${left}%`
  }
}

(function(){
  new Slider(".slider");
})();