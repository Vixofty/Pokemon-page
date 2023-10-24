import { useContext } from "react"
import { PokedexContext } from "../../../Context/PokedexContext"
import { NavLink, useNavigate } from "react-router-dom"

export const Searchbar = () => {
    
    const {onInputChange, valueSearch, onResetForm} = useContext(PokedexContext)

    const navigate = useNavigate(); 

    const onSearchSubmit = e => {
        e.preventDefault();
        navigate('search', {
            state: valueSearch,
        })

        onResetForm();
    }
    const error = e => {
        e.preventDefault()
        console.log("rellena con algo antes de buscar")
    }

    return (
        <>
            <NavLink to={"/"} className="navbutton"> Start </NavLink>
            <form 
                className="search-form" 
                onSubmit={ valueSearch.length ? (
                    onSearchSubmit
                ) : (
                    error
                )}
            >
                <input type="search" name='valueSearch' value={valueSearch} onChange={onInputChange} id="" placeholder="Search pokemon by its name"/>
                <button type="submit"> Search </button>
                
                
            </form>
            
        </>
        
    )
}