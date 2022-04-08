import { createContext, useState } from "react";

const LIMIT = 20;

const OffsetContext = createContext();

const OffsetProvider = ({ children }) => {

    const [offset, setOffset] = useState(0);

    const next = () => {
        setOffset((offset) => offset + LIMIT);
    }

    const previous = () => {
        setOffset((offset) => offset - LIMIT);
    }

    const first = () => {
        setOffset(0);
    }

    return (
        <OffsetContext.Provider value={{
            offset,
            next,
            previous,
            first
        }}>
            {children}
        </OffsetContext.Provider>
    );
};

export { OffsetProvider }
export default OffsetContext;