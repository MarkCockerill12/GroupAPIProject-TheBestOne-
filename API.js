 urlAPI1 = ('https://www.omdbapi.com/?i=tt1201607&apikey=178a7aa9')


function search(){
  searchString = document.getElementById("MOVIENAME").value;
    url = "https://www.omdbapi.com/?s="+searchString+"&apikey=178a7aa9" ;
    alert(urlAPI1)
    fetch(urlAPI1)
    .then((resp) => resp.json())
    .then(function(movie) {
      console.log(movie);

      movie.Search.forEach(element => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
  
        const h1 = document.createElement('h1');
        h1.textContent = element.Title;
  
        const p = document.createElement('p');
  
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);

        
      });
      
        
   }
  )}


//BetA CODE DO NOT WORRY BOut it WE ARE GGUUUD
