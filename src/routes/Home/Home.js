import usePokemons from "../../hooks/usePokemons";
import Container from 'react-bootstrap/Container'
import List from "../../components/List/List";
import Pagination from "../../components/Pagination/Pagination";
import OffsetContext from "../../context/offset";
import { useContext } from "react";
import ListPlaceholder from "../../components/ListPlaceholder/ListPlaceholder";

const Home = () => {

    const { offset } = useContext(OffsetContext);

    const { pokemons, pokemonURLStatus, loading } = usePokemons(offset);

    return (
        <Container style={{ minHeight: "calc(100vh - 56px)" }}>
            {pokemonURLStatus === "loading" || loading === true
                ? <ListPlaceholder />
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
