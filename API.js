const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

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

       const img = document.createElement('img');
       // img.src = `${element.results[i].image_background}`;
       img.src = element.results[i].image_background;

       const cardButton = document.createElement('a');
       cardButton.setAttribute("href", ("https://api.rawg.io/api/games?key=223cbd9b75454545a8743e05c64645ff/" + element.results[i].id));
       cardButton.innerHTML = ("More Information");

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(img);
        card.appendChild(cardButton);

      }
   }
  )
  
  //THIS IS THE CODE FOR deviant API
  const app = document.getElementById('pics');

  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  
  app.appendChild(container);

 var request = new XMLHttpRequest();
 request.open("GET", 'https://backend.deviantart.com/rss.xml?type=deviation&q=by%3Aspyed+sort%3Atime+meta%3Aall', true);
 request.responseType = 'document';
 request.overrideMimeType('text/xml');
 request.onload = function () {
   if (request.readyState === request.DONE) {
     if (request.status === 200) {
       console.log(request.responseXML);
     }
   }
 };
 request.send(null);

 console.log(request.responseXML);
 
// const parser = new request.responseXML.XMLParser();
//     parser.parse(request.responseXML);
    // console.log(theXML);


// fetch("https://backend.deviantart.com/oembed?url=https://www.deviantart.com/koibohe/art/THIS-BITCH-EMPTY-770902509")
//   .then((resp) => resp.json())
//   .then(function(art) {
//     console.log(art);
    
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');

//       const img = document.createElement('img');
//       img.src = `${art.results[i].image_background}`;

//       const p = document.createElement('p');
//       // tumblr.playtime = tumblr.playtime.substring(0, 300); this limits the description - gotta use this with string words
//       p.textContent = `${art.slug}...`;

//       container.appendChild(card);
//       card.appendChild(img);
//       //card.appendChild(p);
//  }
// )

//}

}


