class Dim{
  static getWidth(el){
    let style = el.currentStyle = window.getComputedStyle(el)
    
    return el.offsetWidth + parseFloat(style.marginRight) + parseFloat(style.marginLeft)
  }
}

class Choreography{
  constructor(container_selector, item_selector){
    this.container = document.querySelector(container_selector);
    this.elements = document.querySelectorAll(item_selector);

    this.elements.forEach(el => el.style.opacity = 0);
    
    this.setDelay();
  }

  setDelay(){
    let itemWidth =  Dim.getWidth(this.elements[0]);
    let itemsPerRow = Math.floor(this.container.clientWidth / itemWidth);
    
    for (let i = 0; i < this.elements.length; i += itemsPerRow) {
      for (let j = i; j < (i + itemsPerRow); j++) {
        let xPosition = parseInt(i/itemsPerRow);
        let yPosition = j -i;
        
        //this.elements[i+(j-i)].innerHTML = "["+xPosition+","+yPosition+"]";
        let positionSum = xPosition + yPosition

        this.elements[i+(j-i)].style.animationDelay = (positionSum*50)+"ms"
      }
    }

    this.elements.forEach(el => el.classList.add("zoomIn"));
  }
}

(function(){
  new Choreography(".row",".card")
})()
