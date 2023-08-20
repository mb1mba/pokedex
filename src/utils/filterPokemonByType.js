export function filterPokemonByType(data, typeFilter) {
    if (!typeFilter) {
      return data;
    }
  
    return data.filter(item =>
      item.types?.map(pokemon => pokemon.type.name).includes(typeFilter)
    );
  }
  