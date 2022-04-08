import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import pokemonService from "../services/pokemon/pokemonService";

function usePokemon() {

    const { pokemonId } = useParams();

    const {
        data: pokemon,
        status: pokemonStatus
    } = useQuery(["pokemon", pokemonId],
        () => pokemonService.getPokemon(pokemonId));

    return { pokemon, pokemonStatus }

}

export default usePokemon;