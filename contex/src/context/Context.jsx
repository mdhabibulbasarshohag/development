import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const COUNTER_CONTEXT = createContext();

const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const value = {
        count,
        setCount,
    };

    return (
        <COUNTER_CONTEXT.Provider value={value}>
            {children}
        </COUNTER_CONTEXT.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContextProvider;