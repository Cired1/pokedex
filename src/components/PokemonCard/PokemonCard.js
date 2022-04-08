import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const PokemonCard = ({ name, image, id, primaryType, secondaryType }) => {

    return (
        <Card style={{ maxWidth: "20%", minWidth: "200px" }}>
            <Card.Header as="h5" 
                className={secondaryType 
                    ? `${primaryType}-${secondaryType}`
                    : `${primaryType}`
                }
            >
                <Link to={`/pokemon/${name}`}>
                    {`${id}.-${name.toUpperCase()}`}
                </Link>
            </Card.Header>
            <Card.Img
                variant="top"
                src={image}
            />
        </Card>
    )
}

export default PokemonCard
