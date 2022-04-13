'use strict'

const colors = {
	fire: '#ff1100',
	grass: '#00ff1e',
	electric: '#f6ff00',
	water: '#00eaff',
	ground: '#914400',
	rock: '#787878',
	fairy: '#ff007b',
	poison: '#cc00ff',
	bug: '#afde2f',
	dragon: '#bbc8fc',
	psychic: '#edbbfc',
	flying: '#cfcfcf',
	fighting: '#787878',
    normal: '#b0b0b0',
    ice: '#00d0ff'
};

const main_types = Object.keys(colors);
    
const pesquisarPoke = () =>{

    const getPokemonurl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for (let i =1; i<=151; i++){
        pokemonPromises.push(fetch(getPokemonurl(i)).then(response => response.json()))
    }
    Promise.all(pokemonPromises)
    .then(pokemons => {
        const lisPokemons = pokemons.reduce((accumulator ,pokemon) => {

            const types = pokemon.types.map(typeInfo => typeInfo.type.name)
            accumulator += 
            `<div class="card" style="background-color:${colors[types[0]]}">
                <div class ="img">
                <img class ="card-image ${types[0]}" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
                </div>
                <div class ="atributos">
                <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                <p class="card=subtitle">${types.join(' | ')}</p>
                </div>
                
            </div>`
            return accumulator
        }, '')
        const ul = document.querySelector('[data-js="pokedex"]')
       
        ul.innerHTML = lisPokemons
    })
}

pesquisarPoke()
