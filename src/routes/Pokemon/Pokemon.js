import Container from "react-bootstrap/esm/Container"
import Card from 'react-bootstrap/Card';
import usePokemon from "../../hooks/usePokemon";

const Pokemon = () => {

    const { pokemon, pokemonStatus } = usePokemon();

    return (
        <Container style={{ minHeight: "calc(100vh - 56px)" }}>
            {pokemonStatus === "loading"
                ? <h2>loading...</h2>
                : <>
                    <Card>
                        <Card.Header as="h5"
                        /* className={secondaryType
                            ? `${primaryType}-${secondaryType}`
                            : `${primaryType}`
                        } */
                        >
                            {pokemon.name}
                            {/* <Link to={`/pokemon/${name}`}>
                                {`${id}.-${name.toUpperCase()}`}
                            </Link> */}
                        </Card.Header>
                    </Card>
                </>
            }
        </Container>
    )
}

export default Pokemon
