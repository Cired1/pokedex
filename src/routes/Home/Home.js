import usePokemons from "../../hooks/usePokemons";
import Container from 'react-bootstrap/Container'
import List from "../../components/List/List";

const Home = () => {

    const { pokemons, pokemonURLStatus } = usePokemons();

    return (
        <Container>
            {pokemonURLStatus === "loading"
                ? <>Loading...</>
                : <List
                    pokemons={pokemons}
                />
            }
        </Container>
    )
}

export default Home
