import { PokedexContext } from "../../../Context/PokedexContext"
import { useContext } from "react"
import { TypesList } from "./TypesList"
import { PokemonsList } from "./PokemonsList"
import { PokemonSlice } from "./PokemonSlide"
import { Loader } from "./Loader"

export const PokemonsPage = () => {

    const { loading, currentPokemon } = useContext(PokedexContext)

    const pokemon = currentPokemon[0]

    return (
        <div className="pokemons-page-div">
             {loading ? (
                <Loader/>
             ) : (
                <>
                    <TypesList/>
                    <PokemonsList/>
                </>
             )}
            
        </div>
    )
}