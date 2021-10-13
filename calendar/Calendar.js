const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

class Calendar{
  constructor(options){
    this.date = options.date || new Date();
    this.container = options.container;

    //To do buttons

    this.calendarTable = null;

    this.buildTable();

    this.updateTable();
  }

  updateTable(){
    this.calculateDates();

    let firstDayInWeek = this.monthStart.getDay();

    let trs = this.calendarTable.querySelectorAll('tr');

    for (let i = 0; i <= 5; i++){
      let tr = trs[i]

      let tds = tr.querySelectorAll('td');
      for (let j = 0; j < 7; j++){
        let td = tds[j];
        let day = (i*7) + j;

        if(day >= firstDayInWeek && (day - firstDayInWeek) < this.monthLength){
          td.innerHTML = day - firstDayInWeek + 1;
          td.style.borderStyle = 'solid';
        }else{
          td.style.borderStyle = 'none';
        }

        
          
      }

      //table.appendChild(tr);
    }

    this.container.querySelector('header').innerHTML = `${months[this.date.getMonth()]} - ${this.date.getFullYear()}`
  }

  calculateDates(){
    this.monthStart = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    this.monthEnd = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);

    this.monthLength = Math.floor((this.monthEnd - this.monthStart) / (1000 * 60 * 60 * 24)); //se divide por los milisegundos de un día

  }

  buildTable(){
    let table = document.createElement('table');
    let thead = document.createElement('thead');

    for (let i = 0; i < 7; i++){
      let td = document.createElement('td');
      td.innerHTML = days[i];
      thead.appendChild(td);
    }

    for (let i = 0; i <= 5; i++){
      let tr = document.createElement('tr');
      for (let j = 0; j < 7; j++){
        let td = document.createElement('td');
        
        tr.appendChild(td);
      }

      table.appendChild(tr);
    }



    table.appendChild(thead);

    this.calendarTable = table;

    let body = document.createElement('div');
    body.classList.add('body');
    body.appendChild(table);

    this.container.classList.add('custom-calendar')
    this.container.appendChild(document.createElement('header'));
    this.container.appendChild(table);
  }
}