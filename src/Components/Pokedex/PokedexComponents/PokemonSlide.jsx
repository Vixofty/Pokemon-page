import { PokedexContext } from "../../../Context/PokedexContext"
import { useContext } from "react"

export const PokemonSlice = ({ pokemon }) => { 

    const {handleExitButton} = useContext(PokedexContext)

    return (
        <div className="outside">
            <div className="pokemonslice">
                <button onClick={handleExitButton}> X </button>
                <div className="pokemonsliceimg-div">
                    <img 
                        width="200px"
                        src={
                            pokemon.sprites.other.home.front_default ? 
                            pokemon.sprites.other.home.front_default : 
                            pokemon.sprites.other.dream_world.front_default ? 
                            pokemon.sprites.other.dream_world.front_default : 
                            pokemon.sprites.front_default ? 
                            pokemon.sprites.front_default :  
                            null 
                        } 
                        alt={`Pokemon ${pokemon.name}`}  />
                </div>
                <div className="pokemonsliceinfo-div">
                    <h2> N°{pokemon.id} {pokemon.name} </h2>
                    <div className="pokemonslicetypes-div">
                        {pokemon.types.map(type => (
                            <span className={`${type.type.name}`} key={type.type.name}> {type.type.name} </span>
                        ))}
                    </div>
                    <div className="pokemonslicestate-div">
                        <h3> Height </h3>
                        <h3> Base Experience: </h3>
                        <h3> Weight </h3>
                        <h4>{pokemon.height}</h4>
                        <h4>{pokemon.base_experience ? pokemon.base_experience : "unknown"}</h4>
                        <h4>{pokemon.weight}</h4>
                    </div>
                    <div className="pokemonslicestats-div">
                        <h3>HP</h3>
                        <h3>ATK</h3>
                        <h3>DEF</h3>
                        <h3>S-ATK</h3>
                        <h3>S-DEF</h3>
                        <h3>SPD</h3>
                        {pokemon.stats.map(stat => ( 
                            <h4 key={stat.stat.url}> {stat.base_stat} </h4>
                        ))}
                    </div>
                    <div className="pokemonsliceabilities-div">
                        {pokemon.abilities.map(ability => (
                            <span key={ability.ability.url}> {ability.ability.name} </span>
                        ))}
                    </div>

                </div>
                
            </div>
        </div>
    )
}