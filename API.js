const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);


// this is da code for uhhhhhhhh api1 
urlAPI1 = ('https://api.rawg.io/api/games?key=223cbd9b75454545a8743e05c64645ff&dates=2019-09-01,2019-09-30&platforms=18,1,7')

// this code here is what searches the api
function search(){
  //THIS IS THE CODE FOR VIDEO GAME API
  searchString = document.getElementById("GAMENAME").value;
    url = "https://api.rawg.io/api/games?key=223cbd9b75454545a8743e05c64645ff&search="+searchString ;
    fetch(url)
    .then((resp) => resp.json())
    .then(function(element) {
      console.log(element);
      for (i in element.results){
        console.log(element.results[i].name);
     
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
 
        const h1 = document.createElement('h1');
        h1.textContent = element.results[i].name;

      const p = document.createElement('p');
      // element.playtime = element.playtime.substring(0, 300); this limits the description - gotta use this with string words
      p.textContent = `${element.results[i].playtime}`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
      }
   }
  )
  
  //THIS IS THE CODE FOR TMBLUR API
//   const app = document.getElementById('pics');

//   const container = document.createElement('div');
//   container.setAttribute('class', 'container');
  
//   app.appendChild(container);

// urlAPI2= 
// fetch(urlAPI2)
//   .then((resp) => resp.json())
//   .then(function(tumblr) {
//     console.log(tumblr);
    
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');

//       const h1 = document.createElement('h1');
//       h1.textContent = tumblr.name;

//       const p = document.createElement('p');
//       // tumblr.playtime = tumblr.playtime.substring(0, 300); this limits the description - gotta use this with string words
//       p.textContent = `${tumblr.slug}...`;

//       container.appendChild(card);
//       card.appendChild(h1);
//       card.appendChild(p);
//  }
// )

}



