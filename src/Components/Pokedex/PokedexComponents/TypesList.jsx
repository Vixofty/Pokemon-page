import { PokedexContext } from "../../../Context/PokedexContext"
import { useContext } from "react"
import { Loader } from "./Loader"

export const TypesList = () => {

    const {globalLoading, allPokemonsTypes, handleButton, tryAgain} = useContext(PokedexContext)

    const handleTryAgain = e => {
        tryAgain()
            e.target.style.display = "none"
        setTimeout(() => {
            e.target.style.display = "block"
        }, 5000);
    }

    return (
        <div className="typefilter-div">
            <h3>Filter by type:</h3>
            { globalLoading ? (
                <>
                    <Loader/>
                    <h3>Loading global pokemon's data</h3>
                    <button className="tryAgain" onClick={handleTryAgain}> Try again</button>
                </>
                
            ) : (
                <div className="typebuttons-div">
                    {allPokemonsTypes.map(type => {
                        return <button className={`${type.name} typebutton`} onClick={handleButton} name={type.name} key={type.name} > {type.name} </button>
                    })}
                    <button className="typebutton" onClick={handleButton}> Reset </button>
                </div>
            )}
            
            
        </div>
    )
}