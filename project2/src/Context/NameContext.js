import React, { createContext, useState, useContext } from "react";

const NameContext = createContext();

export const NameProvider = ({ children }) => {
    const [name, setName] = useState("");

     const handleName = (newName) => {
    setName(newName);
  };
    return <>
        <NameContext.Provider value={{ name, handleName }}>
            {children}
        </NameContext.Provider>
    </>
};
export default NameProvider;
export const useNameContext = () => useContext(NameContext);