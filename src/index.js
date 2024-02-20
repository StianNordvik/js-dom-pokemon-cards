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
    cardsContainer.appendChild(card);
});