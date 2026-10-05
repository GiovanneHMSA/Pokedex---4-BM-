async function buscarPokemon() {

const nome = document.getElementById("Pokemon").value;
const resposta = await(

`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`
);

const pokemon = await resposta.json();
console.log(pokemon);
document.getElementById("nome").textContent = pokemon.name;
document.getElementById("imagem").src= pokemon.sprites.front_default;
}

