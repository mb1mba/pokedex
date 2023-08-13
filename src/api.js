export async function getDatas() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`)
    const data = await res.json()
    return data.results
}

export async function getPokemons(url) {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export async function getPokemonsDescription(id){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    const data = await res.json()
    return data
}

export async function getPokemonMoves(url){
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export async function getMoves() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200`)
    const data = await res.json()
    return data
}

export async function getItems() {
    const res = await fetch(`https://pokeapi.co/api/v2/move/?offset=0&limit=200`)
    const data = await res.json()
    console.log(data)
    return data
}

export async function getAbilities() {
    const res = await fetch(`https://pokeapi.co/api/v2/item/?offset=0&limit=200"`)
    const data = await res.json()
    console.log(data)
    return data
}