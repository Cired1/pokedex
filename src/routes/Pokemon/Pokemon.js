import Container from "react-bootstrap/esm/Container"
import usePokemon from "../../hooks/usePokemon";

const Pokemon = () => {

    const { pokemon, pokemonStatus } = usePokemon();

    return (
        <Container style={{minHeight: "calc(100vh - 56px)"}}>
            {pokemonStatus === "loading"
                ? <h2>loading...</h2>
                : pokemon.name
            }
        </Container>
    )
}

export default Pokemon
