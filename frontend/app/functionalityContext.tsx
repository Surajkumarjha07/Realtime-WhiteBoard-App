"use client"
import { createContext, useContext, useState } from "react";

interface Context {
    functionality: string,
    setFunctionality: React.Dispatch<React.SetStateAction<string>>
}

const defaultContext = {
    functionality: "",
    setFunctionality: () => { }
}

export const FunctionalityContext = createContext<Context>(defaultContext);

export function FunctionalityProvider({ children }: any) {
    const [functionality, setFunctionality] = useState('');
    return (
        <FunctionalityContext.Provider value={{ functionality, setFunctionality }}>
            {children}
        </FunctionalityContext.Provider>
    );
}

export const useFunctionalityContext = () => {
    const Functionality = useContext(FunctionalityContext);
    return Functionality;
}