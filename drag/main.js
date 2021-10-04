class DOMHelper{}

class DragList{
  constructor(list_selector, items_selector="li"){
    this.list = document.querySelector(list_selector);
    this.items = this.list.querySelectorAll(items_selector);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);

    this.bindEvents();
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
    console.log(el);
    el.classList.add("dragging");
  };

  handleDrag(){};

  handleDragEnd(ev){
    let el = ev.currentTarget;
    console.log(el)
    el.classList.remove("dragging");
  };

}

(function(){
  new DragList("ul");
})();