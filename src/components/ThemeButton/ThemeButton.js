import Button from 'react-bootstrap/Button'
import { useContext } from 'react';
import ThemeContext from '../../context/theme';
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = () => {

    const { theme, handleTheme } = useContext(ThemeContext);

    return (
        <Button
            variant="outline-light"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            onClick={handleTheme}
        >
            {theme === "light"
                ? <FaMoon />
                : <FaSun />
            }
        </Button>
    )
}

export default ThemeButton
