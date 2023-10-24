import { useContext } from "react"
import { PokedexContext } from "../../Context/PokedexContext"
import { Searchbar } from "./PokedexComponents/Searchbar"
import { Outlet } from "react-router-dom"
import { PokemonSlice } from "./PokedexComponents/PokemonSlide"

export const Pokedex = () => {

    const {allPokemons, globalPokemons, currentPokemon} = useContext(PokedexContext)

    const pokemon = currentPokemon[0]

    return (
        <main className="pokedex">
            
            {currentPokemon.length ? (
                <PokemonSlice pokemon={pokemon}/>
                ) : (
                    <></>
                )
            }

            <header className="header">

                <Searchbar/>   

            </header>
    
            <Outlet/>
            
        </main>
    )
}