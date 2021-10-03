class Autocomplete{}

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
  Search.get(googleBooksApiUrl+"harry")
  .then(results => console.log(results));
})();