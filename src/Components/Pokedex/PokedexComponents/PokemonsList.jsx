import { PokedexContext } from "../../../Context/PokedexContext"
import { useContext } from "react"
import { PokemonCard } from "./PokemonCard"

export const PokemonsList = () => {

    const { allPokemons, filteredPokemons, onClickLoadMore } = useContext(PokedexContext)

    return (
        <div className="pokemonlist">
                    {filteredPokemons.length ? (
                        <div className="filteredpokemons-grid">
                            {filteredPokemons.map((pokemon, index) => (
                                <PokemonCard initial={false} pokemon={pokemon} key={pokemon.id} index={index}/> 
                            ))}        
                        </div>
                    ) : (
                        <>
                            <h3>Initial {allPokemons.length} pokemons: </h3>
                            <div className="allpokemons-grid">
                                {allPokemons.map((pokemon, index) => ( 
                                    <PokemonCard initial={true} pokemon={pokemon} key={pokemon.id} index={index}/>
                                ))}
                            </div>
                            <button className="load-more" onClick={onClickLoadMore}>Load more</button>
                        </>
                    )}  
        </div>
    )
}