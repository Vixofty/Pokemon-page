import { NavLink, useLocation } from "react-router-dom"
import { PokedexContext } from "../../../Context/PokedexContext"
import { useContext, useState, useEffect } from "react"
import { PokemonCard } from "./PokemonCard"
import { Loader } from "./Loader"

export const SearchPage = () => {
    const [searchFilteredPokemons, setSearchFilteredPokemons] = useState([])

    const location = useLocation()

    const { globalPokemons, globalLoading, tryAgain } = useContext(PokedexContext)

    const filteredPokemons = globalPokemons.filter(pokemon =>
		pokemon.name.includes(location.state.toLowerCase())
	);
    
    useEffect(() => {
      setSearchFilteredPokemons(filteredPokemons)
    }, [location.state, globalPokemons])

    const handleTryAgain = e => {
        tryAgain()
        e.target.style.display = "none"
        setTimeout(() => {
            e.target.style.display = "block"
        }, 5000);
    }
    

    return (
        <div className="searchpage-div">
        <NavLink to={"/pokedex"} className="searchPage-btn"> Back </NavLink>
            { globalLoading ? (
                <div className="searchpage-loader-div">
                    
                    <h3>Loading global pokemon's data</h3>
                    <Loader/>
                    <button className="tryAgain" onClick={handleTryAgain}> Try again</button>
                </div>
                
            ) : (
                <>
                    <h3>Resultados de busqueda "{location.state}" se encontraron {filteredPokemons.length} pokemons: </h3>
                    <div className="searchfilteredpokemons-grid">
                        {searchFilteredPokemons.map((pokemon, index) => ( 
                            <PokemonCard pokemon={pokemon} key={pokemon.id} index={index}/>
                        ))}
                    </div>
                </>
            )}

            
            
        </div>
    )
}