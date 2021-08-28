class Slider{
  constructor(selector){
    this.slider = document.querySelector(selector);
    this.interval = null;
    this.contador = 0;
    this.itemsCount =  this.slider.querySelectorAll(".container > *").length;
    
    this.start();
    this.buildControls();
  }

  start(){
    this.interval = window.setInterval(this.move, 5000)
  }

  buildControls(){
    for(let i= 0; i < this.itemsCount; i++ ){
      let control = document.createElement("li");

      if(i == 0) control.classList.add("active");

      this.slider.querySelector(".controls ul").appendChild(control);
    }
  }

  move = () => {
    
    this.contador++;
    if (this.contador > this.itemsCount - 1) this.contador = 0;
    this.moveTo(this.contador)
  }

  resetIndicator(){
    this.slider.querySelectorAll(".controls li.active")
      .forEach(element => { 
        element.classList.remove("active");
      });
  }

  moveTo(index){
    let left = index * 100;
    this.resetIndicator();
    this.slider.querySelector(".controls li:nth-child("+(index+1)+")").classList.add("active");
    this.slider.querySelector(".container").style.left = `-${left}%`
  }
}

(function(){
  new Slider(".slider");
})();