import { createContext } from "react";
import useLocalStorage from "use-local-storage";

const initialValue = "light";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useLocalStorage(
        "theme",
        initialValue ? "dark" : "light"
    );

    const handleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            handleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider }
export default ThemeContext;