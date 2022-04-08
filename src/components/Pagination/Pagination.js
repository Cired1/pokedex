import { useContext } from "react";
import OffsetContext from "../../context/offset";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

const Pagination = () => {
    
    const {
        next,
        previous,
        first,
        offset
    } = useContext(OffsetContext);

    return (
        <Container style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Button
                variant="primary"
                style={{ minWidth: "70px" }}
                size="sm"
                onClick={previous}
                disabled={offset === 0 ? true : false}
            >
                {"<<<"}
            </Button>
            <Button
                variant="primary"
                style={{ minWidth: "70px" }}
                size="sm"
                onClick={first}
                disabled={offset === 0 ? true : false}
            >
                First
            </Button>
            <Button
                variant="primary"
                style={{ minWidth: "70px" }}
                size="sm"
                onClick={next}
            >
                {">>>"}
            </Button>
        </Container>
    )
}

export default Pagination

