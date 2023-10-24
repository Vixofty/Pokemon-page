import { PokedexContext } from "./PokedexContext";
import { useEffect, useState } from "react";

export const PokewordleProvider = ({children}) => {
    return (
        <PokedexContext.Provider value={{}}>
            {children}
        </PokedexContext.Provider>
    )
}