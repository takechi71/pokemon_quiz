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
const apiUrl2 = "https://pokeapi.co/api/v2/pokemon-species/";   // 上記のURLでは取得できない情報を取得するためのURL

document.getElementById("get").addEventListener("click", async () => {
  const array_id = getUniqueRandomNumbers(1, 493, 4);
  ansIndex = Math.floor(Math.random() * 4);   // 答えとするポケモンをランダムに決める.
  const responses = await Promise.all(array_id.map(id => fetch(apiUrl1 + id)));
  const pokemons = await Promise.all(responses.map(response => response.json()));

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

  image.src = pokemon1.sprites.front_default;
  name1.textContent = `Name: ${pokemon1.name}`;
  name2.textContent = `Name: ${pokemon2.name}`;
  name3.textContent = `Name: ${pokemon3_p1.name}`;
  name4.textContent = `Name: ${pokemon4_p1.name}`;
  weight.textContent = `Weight: ${pokemon1.weight / 10} kg`;
  height.textContent = `Height: ${pokemon2ight / 10} m`;
  type.textContent = `Type: ${pokemon1.ty2map(t => t.type.name).join(", ")}`;
  color.textContent = `Color: ${pokem2p2.color.name}`;
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
