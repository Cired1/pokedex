import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand>PokeList</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation

