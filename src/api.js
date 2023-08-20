const BASE_URL = 'https://pokeapi.co/api/v2/'

export async function getDatas() {
    const res = await fetch(`${BASE_URL}pokemon?offset=0&limit=150`)
    const data = await res.json()
    return data.results
}

export async function getPokemons(url) {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export async function getPokemonsDescription(id){
    const res = await fetch(`${BASE_URL}pokemon-species/${id}/`)
    const data = await res.json()
    return data
}

export async function getPokemonMoves(url){
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export async function getPokemonEvolution(id){
    const res = await fetch(`${BASE_URL}pokemon-species/${id}/`)
    const data = await res.json()
    const url = data["evolution_chain"].url
    const pokemonEvolutionChain = await fetch(url)
    return pokemonEvolutionChain
}

export async function getMovesData(){
    const res = await fetch(`${BASE_URL}move?offset=0&limit=300`)
    const data = await res.json()
    return data.results
}


export async function getMoves(url){
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export async function getItemsData() {
    const res = await fetch(`${BASE_URL}item/?offset=0&limit=200`)
    const data = await res.json()
    return data.results
}

export async function getItems(url){
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export async function getAbilitiesData() {
    const res = await fetch(`${BASE_URL}ability/?offset=0&limit=200"`)
    if (!res.ok) {
        throw new Error('Request failed with status: ' + res.status);
      }
    const data = await res.json()
    return data.results
}

export async function getAbilities(url){
    const res = await fetch(url)
    const data = await res.json()
    return data
}
