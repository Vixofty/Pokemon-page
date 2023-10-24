import { PokedexContext } from "../../../Context/PokedexContext"
import { useContext, useEffect } from "react"

export const PokemonCard = ({pokemon, index, initial}) => {

    const {offset, allPokemons, handlePokemonButton} = useContext(PokedexContext)

    useEffect(() => {
        if (!initial) {
            const card = document.getElementById(`card${index}`)   
            card.style.animationDelay = `${index * 0.1 - 0 * 0.1}s`
            card.style.display = "block"
        } else { 
            const card = document.getElementById(`card${index}`)
            card.style.animationDelay = `${index * 0.1 - (offset * 0.1)}s`
            card.style.display = "block"
        }
            
    }, [allPokemons]) 

    return (
        <>
            <div className={`pokemoncard`} id={ `card${index}`}>
                <div className="pokemoncardimg-div">
                    <img
                        height="150px" 
                        src={
                            pokemon.sprites.other.home.front_default ? 
                            pokemon.sprites.other.home.front_default : 
                            pokemon.sprites.other.dream_world.front_default ? 
                            pokemon.sprites.other.dream_world.front_default : 
                            pokemon.sprites.front_default ? 
                            pokemon.sprites.front_default :  
                            null 
                        } 
                        alt={`Pokemon ${pokemon.name}`} 
                    /> 
                    <div className="pokemoncardtext-div">
                        <span>N° {pokemon.id} </span>
                        <h3> {pokemon.name} </h3>
                        <div className="pokemoncardtypes-div">
                            {pokemon.types.map(type => (
                                <span className={`${type.type.name}`} key={type.type.name}> {type.type.name} </span>
                            ))}
                        </div>
                        <button onClick={handlePokemonButton} id={pokemon.id}> More Details </button>
                    </div>
                </div>
            </div>
        </>
    )
}