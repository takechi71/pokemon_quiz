const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

document.getElementById("get").addEventListener("click", async () => {
  const response = await fetch(apiUrl + Math.floor(Math.random() * 493));
  const pokemon = await response.json();
  const image = document.createElement("img");
  const name = document.createElement("p");
  image.src = pokemon.sprites.front_default;
  name.textContent = pokemon.name;
  const pokemonDiv = document.getElementById("pokemon");
  pokemonDiv.innerHTML = "";
  pokemonDiv.appendChild(image);
  pokemonDiv.appendChild(name);
});