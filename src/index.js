const cardsContainer = document.querySelector('.cards');

data.forEach(pokemon => {
    const card = document.createElement('p');
    card.classList.add('card');
    card.innerHTML = `
    <h2 class="card--title">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>  
    <img 
       width="256"
       class="card--img"
       src="${pokemon.sprites.other["official-artwork"].front_default}"
       onClick="${changeImage(pokemon)}"
    />
    <div class="card--text">
       <p>HP: ${pokemon.stats[0].base_stat}</p>
       <p>ATTACK: ${pokemon.stats[1].base_stat}</p>
       <p>DEFENSE: ${pokemon.stats[2].base_stat}</p>
       <p>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</p>
       <p>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</p>
       <p>SPEED: ${pokemon.stats[5].base_stat}</p>
    </div>
    `;
    // Append the card to the container
    card.appendChild(gamesAppeared(pokemon.game_indices));

    cardsContainer.appendChild(card);
});

function changeImage(pokemon){
   const img = document.getElementsByClassName("card--img");
   img.src = pokemon.sprites.front_default;


}

function gamesAppeared(games){
   const container = document.createElement("div");

   const appearsIn = document.createElement("h3");
   appearsIn.innerText = "Pokemon Appears in";
   container.appendChild(appearsIn);

   for(let i = 0; i < games.length; i++){
      const game = document.createElement("p");
      game.innerHTML = "Pokemon " + games[i]["version"]["name"].charAt(0).toUpperCase() 
      + games[i]["version"]["name"].slice(1);
      container.appendChild(game);
   }

   return container;
}
