import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import pokemonService from "../services/pokemon/pokemonService";

function usePokemons(offset) {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);

    const {
        data: pokemonURL,
        status: pokemonURLStatus
    } = useQuery(["pokemonList", offset], () => pokemonService.getPokemonUrl(offset));

    useEffect(() => {
        setLoading(true);
        if (pokemonURLStatus === "success") {
            const { results } = pokemonURL;
            Promise.all([
                pokemonService.getPokemon(results[0].name),
                pokemonService.getPokemon(results[1].name),
                pokemonService.getPokemon(results[2].name),
                pokemonService.getPokemon(results[3].name),
                pokemonService.getPokemon(results[4].name),
                pokemonService.getPokemon(results[5].name),
                pokemonService.getPokemon(results[6].name),
                pokemonService.getPokemon(results[7].name),
                pokemonService.getPokemon(results[8].name),
                pokemonService.getPokemon(results[9].name),
                pokemonService.getPokemon(results[10].name),
                pokemonService.getPokemon(results[11].name),
                pokemonService.getPokemon(results[12].name),
                pokemonService.getPokemon(results[13].name),
                pokemonService.getPokemon(results[14].name),
                pokemonService.getPokemon(results[15].name),
                pokemonService.getPokemon(results[16].name),
                pokemonService.getPokemon(results[17].name),
                pokemonService.getPokemon(results[18].name),
                pokemonService.getPokemon(results[19].name),
            ]).then(data => {
                setPokemons(data);
                setLoading(false);
            })
        }
    }, [pokemonURLStatus, pokemonURL])

    return { pokemons, pokemonURLStatus, loading }

}

export default usePokemons;