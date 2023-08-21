export const getImageURL = ( pokemonId ) => {
    const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';
      return `${ baseURL }/official-artwork/${ pokemonId }.png`;

  };