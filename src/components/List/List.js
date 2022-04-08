import Container from 'react-bootstrap/esm/Container';
import PokemonCard from '../PokemonCard/PokemonCard';

const List = ({ pokemons }) => {

    return (
        <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", padding: "1rem", marginTop: "1rem" }}>
            {pokemons.map((pokemon) => {
                const { id, name, sprites, types } = pokemon;
                return <PokemonCard
                    key={id}
                    id={id}
                    name={name}
                    image={sprites.other["official-artwork"].front_default}
                    primaryType={types[0].type.name}
                    secondaryType={types[1] ? types[1].type.name : ""}
                />
            })}
        </Container>
    )
}

export default List
