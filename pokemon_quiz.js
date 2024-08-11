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
  const response1 = await fetch(apiUrl1 + array_id[random]);
  const response2 = await fetch(apiUrl2 + array_id[random]);
  
  const response3 = await fetch(apiUrl2 + array_id[1]);
  const response4 = await fetch(apiUrl2 + array_id[2]);
  const response5 = await fetch(apiUrl2 + array_id[3]);

  const pokemon1_p1 = await response1.json();
  const pokemon1_p2 = await response2.json();
  
  const pokemon2_p1 = await response3.json();
  const pokemon3_p1 = await response4.json();
  const pokemon4_p1 = await response5.json();
  
  const image = document.createElement("img");
  const name1 = document.createElement("p");
  const name2 = document.createElement("p");
  const name3 = document.createElement("p");
  const name4 = document.createElement("p");
  const weight = document.createElement("p");
  const height = document.createElement("p");
  const type = document.createElement("p");
  const color = document.createElement("p");
  const shape = document.createElement("p");

  image.src = pokemon1_p1.sprites.front_default;
  name1.textContent = `Name: ${pokemon1_p1.name}`;
  name2.textContent = `Name: ${pokemon2_p1.name}`;
  name3.textContent = `Name: ${pokemon3_p1.name}`;
  name4.textContent = `Name: ${pokemon4_p1.name}`;
  weight.textContent = `Weight: ${pokemon1_p1.weight / 10} kg`;
  height.textContent = `Height: ${pokemon1_p1.height / 10} m`;
  type.textContent = `Type: ${pokemon1_p1.types.map(t => t.type.name).join(", ")}`;
  color.textContent = `Color: ${pokemon1_p2.color.name}`;
  shape.textContent = `shape: ${pokemon1_p2.shape.name}`;
  
  const pokemonDiv = document.getElementById("pokemon");
  pokemonDiv.innerHTML = "";
  pokemonDiv.appendChild(image);
  pokemonDiv.appendChild(name1);
  pokemonDiv.appendChild(name2);
  pokemonDiv.appendChild(name3);
  pokemonDiv.appendChild(name4);
  pokemonDiv.appendChild(weight);
  pokemonDiv.appendChild(height);
  pokemonDiv.appendChild(type);
  pokemonDiv.appendChild(color);
  pokemonDiv.appendChild(shape);
});
