import axios from 'axios';

export class PokemonsService {
  static async getAll() {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=10000`
    );

    return response.data.results;
  }

  static async getAllById(ID) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ID}`);
    const { data } = response;
    const { id, name, types, sprites } = data;
    const { other } = sprites;

    return {
      id,
      name,
      types,
      avatar:
        other.home.front_default ??
        other['official-artwork'].front_default ??
        require('../images/preloader.gif'),
    };
  }

  static async getByName(pokemonName) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    );

    return response.data;
  }
}
