import { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import logo from "../../assets/pokeball.png"
import ThemeContext from '../../context/theme';
import ThemeButton from '../ThemeButton/ThemeButton';

const Navigation = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <Navbar
            expand="lg"
            variant="dark"
            className={`${theme === "light" ? "bg-danger" : "bg-primary"} bg-gradient`}
            sticky="top"
        >
            <Container style={{ display: "flex" }}>
                <Navbar.Brand>
                    <Link to="/" className="d-flex gap-2" style={{ color: "#fff" }}>
                        <img
                            alt="logo"
                            src={logo}
                            width="30"
                            height="30"
                        />
                        PokeList
                    </Link>
                </Navbar.Brand>
                <ThemeButton />
            </Container>
        </Navbar>
    )
}

export default Navigation

