import { PokewordleProvider } from "../../Context/PokewordleProvider"
import { Pokewordle } from "./Pokewordle"

function PokewordleContainer() {
    return (
        <PokewordleProvider>
            <Pokewordle/>
        </PokewordleProvider>
    );
}

export default PokewordleContainer;