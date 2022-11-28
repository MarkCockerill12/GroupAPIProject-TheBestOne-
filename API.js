// this is da code for uhhhhhhhh api1 
urlAPI1 = ('http://www.giantbomb.com/api/search/?api_key=f9dc8fa146302bbe5fdbbfdb95ba885c440dc300&format=json&query=""&resources=game')

// this code here is what searches the api
function search(){
  searchString = document.getElementById("MOVIENAME").value;
    url = "http://www.giantbomb.com/api/search/?api_key=f9dc8fa146302bbe5fdbbfdb95ba885c440dc300&format=json&query="searchString"&resources=game" ;
    alert(urlAPI1)
    fetch(urlAPI1)
    .then((resp) => resp.json())
    .then(function(element) {
      console.log(element);
     
      movie.Search.forEach(element => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
 
        const h1 = document.createElement('h1');
        h1.textContent = element.name;
  
        const p = document.createElement('p');
        element.description = element.description.substring(0, 300);
        p.textContent = `${element.description}...`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
      });
   }
  )}

// this is what displays on the webpage as you boot it up
const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

fetch(urlAPI1)
  .then((resp) => resp.json())
  .then(function(game) {
    console.log(game)
    
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = game.name;

      const p = document.createElement('p');
      game.description = game.description.substring(0, 300);
      p.textContent = `${game.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
 }
)
