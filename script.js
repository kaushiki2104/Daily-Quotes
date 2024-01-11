// let main_url='https://api.quotable.io/random';
let main_url='https://dummyjson.com/quotes/random';


let quoteLine=''
let quoteAuthor='';



function getQuotes(){

  fetch(main_url)
  .then( response =>{
    
    if(!response.ok){
      throw new Error("Network response was not ok");
    }

    return response.json()

  }).then(result =>{
      
    console.log("data is -->",result);
    quoteLine= result.quote;
    quoteAuthor= result.author;
    updateHTML()
  })
  .catch(error=> {
    console.log('There was a problem with fetch operation :-', error);
  })


}

function updateHTML(){

  document.getElementById('quoteLine').textContent = quoteLine
  document.getElementById('quoteAuthor').textContent =quoteAuthor

}

getQuotes();











