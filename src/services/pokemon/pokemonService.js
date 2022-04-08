import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemonUrl = async (offset = 0) => {
    const response = await axios.get(BASE_URL + `?offset=${offset}&limit=20`);
    return response.data;
}

const getPokemon = async (name) => {
    const response = await axios.get(BASE_URL + name);
    return response.data;
}

const pokemonService = {
    getPokemonUrl,
    getPokemon
}

export default pokemonService;