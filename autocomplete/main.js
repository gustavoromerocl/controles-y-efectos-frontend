class Autocomplete{
  constructor(input_selector, base_url){
    this.input = document.querySelector(input_selector)
    this.url = base_url;
    this.buildDataList();
  }

  buildDataList(){
    this.dataList = document.createElement("datalist");
    this.dataList.id = "datalist-autocomplete";
    document.querySelector("body").appendChild(this.dataList)
    this.input.setAttribute("list", "datalist-autocomplete")
  }

  build(response){
    this.dataList.innerHTML = ""
    response.items.forEach( item => {
      let optionEl = document.createElement("option");
      optionEl.value = item.volumeInfo.title;
      if (item.volumeInfo.title) optionEl.innerHTML = item.volumeInfo.title;
      
      this.dataList.appendChild(optionEl)
    })
  }

  search(){
    Search.get(this.url +"harry")
    .then(results => this.build(results));
  }
}

class Search{
  static get(url){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            //todo salio bien
            return resolve(JSON.parse(xhr.responseText))
          }
          else{
            //todo salió mal 
            reject(xhr.status)
          }
        }
      }
    })

  }
}

(function(){
  const googleBooksApiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  let autocomplete = new Autocomplete("#searcher", googleBooksApiUrl);
  autocomplete.search();
})();