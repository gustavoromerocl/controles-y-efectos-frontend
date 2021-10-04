class DOMHelper{
  static move(el, coords){
    el.style.top = (coords.y - (el.clientHeight / 2)) + "px";
    el.style.left = (coords.x - (el.clientWidth / 2)) + "px";
  }
  
  static isOver(el, pointerCoords){
    let elCoords = el.getBoundingClientRect();

    if(pointerCoords.x > elCoords.left && pointerCoords.x < (elCoords.left + elCoords.width)){
      if(pointerCoords.y > elCoords.top && pointerCoords.y < (elCoords.top + elCoords.height)){
        return el.style.background = "red";
      }
    }

    el.style.background = "white";
  }
}

class DragList{
  constructor(list_selector, items_selector="li"){
    this.list = document.querySelector(list_selector);
    this.items = this.list.querySelectorAll(items_selector);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);

    this.canvas = document.createElement("canvas");
    this.buildFakeElement();
    this.bindEvents();
  }

  buildFakeElement(){
    this.fakeElement = document.createElement("div");
    this.fakeElement.style.background = "#eee";
    this.fakeElement.classList.add("card");
  }

  bindEvents(){
    this.items.forEach(item => {
      item.addEventListener("dragstart", this.handleDragStart)
      item.addEventListener("drag", this.handleDrag)
      item.addEventListener("dragend", this.handleDragEnd)
    })
  }

  handleDragStart(ev){
    let el = ev.currentTarget;
    ev.dataTransfer.setDragImage(this.canvas, 0, 0); //Reemplaza imagen de arrastre por default
    console.log(el);
    el.classList.add("dragging");
  };

  handleDrag(ev){
    let mouseCoords = {x: ev.clientX, y: ev.clientY}
    DOMHelper.move(ev.currentTarget, mouseCoords);
    this.items.forEach(item => {
      if (item == ev.currentTarget) return;
      DOMHelper.isOver(item, mouseCoords)})
  };

  handleDragEnd(ev){
    let el = ev.currentTarget; //elemento actual
    el.style.top = ""; //Reinicia corrdenadas para evitar bug de arrastre
    el.style.left = "";
    el.classList.remove("dragging");
  };

}

(function(){
  new DragList("ul");
})();