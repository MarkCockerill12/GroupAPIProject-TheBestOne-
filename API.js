
//  gameID= "1";
//  urlMoreInfo ="";
let searchString= "yes";


// this code here is what searches the api
function search(){

  const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

  
  //THIS IS THE CODE FOR VIDEO GAME API
  searchString = document.getElementById("GAMENAME").value;
    url = "https://api.rawg.io/api/games?key=223cbd9b75454545a8743e05c64645ff&search="+searchString+ "&page_size=18";
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
       img.src = element.results[i].background_image;
        img.style.height = '250px'
        img.style.width = '350px'

       const cardButton = document.createElement('a');
       cardButton.setAttribute("href", ("moreInfo.html"));
       //cardButton.setAttribute("href", urlMoreInfo= "https://api.rawg.io/api/games/" + element.results[i].id+ "?key=223cbd9b75454545a8743e05c64645ff&page_size=1")

       cardButton.innerHTML = ("More Info");

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(img);
        card.appendChild(cardButton);
      }
   }
  )
}




  function displayInfo(){


  const app = document.getElementById('info');

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(container);

   //urlMoreInfo= "https://api.rawg.io/api/games/"+ gameID+ "?key=223cbd9b75454545a8743e05c64645ff&page_size=1";

  // fetch(urlMoreInfo)
  //   .then((resp) => resp.json())
  //   .then(function(element) {
  //     console.log(element);
  //     for (i in element.results){
  //       console.log(element.results[i].name);

  //       const card = document.createElement('div');
  //       card.setAttribute('class', 'card');
 
  //       const h1 = document.createElement('h1');
  //       h1.textContent = element.results[i].name;

  //      const img = document.createElement('img');
  //       img.src = element.results[i].background_image;
  //       img.style.height = '350px'
  //       img.style.width = '450px'

  //       const p = document.createElement('img');
  //       p.textContent = element.results[i].description;

  //       container.appendChild(card);
  //       card.appendChild(h1);
  //       card.appendChild(img);
  //       card.appendChild(p);

  //     }})

  //  console.log(searchString)



//THIS IS THE CODE FOR deviant API
 searchString="dark souls" //THIS IS A TEMPORARY THING FOR TESTING, WE WANNA MATCH THE STRING TO THE PREVIOUS ONE

fetch('https://backend.deviantart.com/rss.xml?type=deviation&q=boost%3Apopular+in%3Adigitalart%2Fdrawings+'+searchString)
// .then((resp) => resp.json())
// 
  .then(response => response.text())
  .then(function(art) {
    console.log(art);
    for (i in art.media){
   console.log(art.media[i].title)
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = art.media[i].title;

    const img = document.createElement('img');
    img.src = `${art.media[i].content}`;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img);

     }})

     }
