// min～maxの範囲で、count数分の乱数を生成するgetUniqueRandomNumbers関数.
function getUniqueRandomNumbers(min, max, count) {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(randomNum);
  }

  return Array.from(uniqueNumbers);
}

const apiUrl1 = "https://pokeapi.co/api/v2/pokemon/";   // ポケモンの基本情報を取得するためのURL
const apiUrl2 = "https://pokeapi.co/api/v2/pokemon-species/";   // ポケモンの基本情報以外の情報を取得するためのURL

document.getElementById("get").addEventListener("click", async () => {
  const array_id = getUniqueRandomNumbers(1, 493, 4);
  const response1 = await fetch(apiUrl1 + array_id[0]);
  const response2 = await fetch(apiUrl2 + array_id[0]);
  parameter1 = await response1.json();
  parameter2 = await response2.json();
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