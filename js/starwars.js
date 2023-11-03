// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução


let mainEL = document.querySelector("main");
let ulEl = document.querySelector("ul");
let preEl = document.querySelector("#intro");
let romanos = ['I', 'II', 'III', 'IV', 'V', 'VII'];
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://swapi.dev/api/films');
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let results = xhr.response.results;

      results.sort(function(a, b) {
        if (a.episode_id < b.episode_id){
            return -1;
        }
        else{
            return true;
        }
      });
      ulEl.innerHTML = ' ';

      for (let i = 0; i  < results.length; i++) {
        let novoEl = document.createElement('li');
        novoEl.setAttribute('data-id-episodio', `${results[i].episode_id}`);
        novoEl.innerHTML = `Episode ${romanos[i]}: ${results[i].title}`;
        ulEl.appendChild(novoEl); 
        novoEl.addEventListener('click', () =>{
            let audio = new Audio('audio/tema-sw.mp3');
            audio.play();
            preEl.innerHTML = `Episode ${romanos[i]}\n${results[i].title.toUpperCase()}\n\n${results[i].opening_crawl}`
        })
       }
      
    }
  }
}
xhr.send();