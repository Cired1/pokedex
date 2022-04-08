import { useContext } from "react";
import ThemeContext from "../../context/theme";
import useScroll from "../../hooks/useScroll";
import Button from "react-bootstrap/Button";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {

    const { theme } = useContext(ThemeContext);

    const { visible, toggleVisible, scrollToTop } = useScroll();

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button
            style={{ bottom: "2rem", right: "1rem" }}
            className={
                `
                ${visible ? "d-flex" : "d-none"}
                ${theme === "light" ? "bg-danger" : "bg-primary"}
                position-fixed 
                bg-gradient
                justify-content-center 
                align-items-center 
                p-3 
                rounded-circle
                border 
                border-light
                `
            }
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </Button >
    )
}

export default ScrollButton
