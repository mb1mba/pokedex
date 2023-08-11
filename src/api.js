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



// Mon utilisateur arrive sur la page d'acceuil
    //Plusieurs choix qi s'offre à lui
        // il chosit de voir le pokedex
            // S'il fait ce choix on doit display l'ensemble du pokedex
            // Il faudra réaliser un call api "https://pokeapi.co/api/v2/pokemon/?offset=200&limit=200"
                // En réalisant ce call, je vais avoir tous les pokemons avec leur propre URL
                // Je vais devoir map à travers chaque objet du tableau results pour obtenir les infos que je désire
                // Les inforamtions désiré sont: le nom du pkémon et son type
            // L'utilisateur pourra donc 
            

        //il choisit de voir les moves
            //"https://pokeapi.co/api/v2/move/?offset=20&limit=20"
        //il choisit de voir les abilities
            //"https://pokeapi.co/api/v2/ability/?offset=20&limit=20"
        
        // il choisit de voir les items
            // call api "https://pokeapi.co/api/v2/item/?offset=20&limit=20"
                
        
