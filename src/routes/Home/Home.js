import usePokemons from "../../hooks/usePokemons";
import Container from 'react-bootstrap/Container'
import List from "../../components/List/List";
import Pagination from "../../components/Pagination/Pagination";
import OffsetContext from "../../context/offset";
import { useContext } from "react";

const Home = () => {

    const { offset } = useContext(OffsetContext);

    const { pokemons, pokemonURLStatus, loading } = usePokemons(offset);

    return (
        <Container>
            {pokemonURLStatus === "loading" || loading === true
                ? <>Loading...</>
                : <>
                    <List
                        pokemons={pokemons}
                    />
                    <Pagination />
                </>
            }
        </Container>
    )
}

export default Home
