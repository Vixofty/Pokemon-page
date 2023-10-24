import { PokedexProvider } from "../../Context/PokedexProvider"
import { Pokedex } from "./Pokedex"

function PokedexContainer() {
    return (
      <PokedexProvider>
        <Pokedex/>
      </PokedexProvider>
    );
}
  
export default PokedexContainer;