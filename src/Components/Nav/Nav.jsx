import { NavLink, Outlet, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";

function Nav() {
    const [isNavigationVisible, setIsNavigationVisible] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setIsNavigationVisible(true)
        } else {
            setIsNavigationVisible(false)
        }
      }, [location]);
      
    return (
        <> 
        { isNavigationVisible ? (
            <nav className="nav-div" id="nav-div">
                <div className="nav" id="nav">
                    <div className="navlinks-div navlink-pokedex-div">
                        <NavLink className="navlink navlink-pokedex" to={"/pokedex"}>Pokedex</NavLink>
                    </div>
                    <div className="navlinks-div navlink-pokewordle-div">
                        <NavLink className="navlink navlink-pokewordle" to={"/pokewordle"}>Pokewordle</NavLink>
                    </div>
                </div>
            </nav> 
        ) : (
            <></>
        )}
                  
            <Outlet/>

        </> 
        
    )
}

export default Nav