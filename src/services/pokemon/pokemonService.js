import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemonUrl = async () => {
    const response = await axios.get(BASE_URL);
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