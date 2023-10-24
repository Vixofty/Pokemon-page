import { PokedexContext } from "./PokedexContext";
import { useEffect, useState } from "react";
import { useForm } from "../Hook/useForm";

export const PokedexProvider = ({children}) => {
    const [allPokemons, setAllPokemons] = useState([])
    const [allPokemonsTypes, setAllPokemonsTypes] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [currentType, setCurrentType] = useState("")
    const [filteredPokemons, setFilteredPokemons] = useState([])
    const [currentPokemon, setCurrentPokemon] = useState([])
    const [navInitialState, setNavInitialState] = useState("")
    const [loading, setLoading] = useState(true)
    const [globalLoading, setGlobalLoading] = useState(true)

    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: '',
    })

    const getAllPokemons = async (limit=50) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
  
        const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);
  
        setAllPokemons([...allPokemons, ...results]);
        setLoading(false); 
    }

    const getAllPokemonsTypes = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/type')
        const data = await res.json()

        const promises = data.results.map(async type => {
			const res = await fetch(type.url)
			const data = await res.json()
			return data;
		});
  
        const results = await Promise.all(promises)
  
        setAllPokemonsTypes(results);
    }

    const getGlobalPokemons = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url)
			const data = await res.json()
			return data;
		});

		try {
            const results = await Promise.all(promises);
            console.log("Promise.all resolved successfully");
            setGlobalPokemons(results);
            setGlobalLoading(false);
            
            
        } catch (error) {
            console.error("Error in Promise.all:", error);   
        }
	};

    useEffect(() => {
        getAllPokemons()
    }, [offset])

    useEffect(() => {
        getAllPokemonsTypes()
    }, [])

    useEffect(() => {
        getGlobalPokemons()
    }, [])

    const onClickLoadMore = () => {
		setOffset(offset + 50);
	};

    const handleButton = e => {
        setCurrentType(e.target.name);

		const filteredResults = globalPokemons.filter(pokemon =>
			pokemon.types
				.map(type => type.type.name)
				.includes(e.target.name)
		);
		setFilteredPokemons(filteredResults);
	};
    
    const handlePokemonButton = e => {
        const pokemonID = parseInt(e.target.id)
        
        if (!globalLoading) {
            const pokemon = globalPokemons.filter(pokemon => 
                pokemon.id === pokemonID
            )
            setCurrentPokemon(pokemon)
        } else {
            const pokemon = allPokemons.filter(pokemon => 
                pokemon.id === pokemonID
            )
            setCurrentPokemon(pokemon)
        }    
    }

    const handleExitButton = () => {
        setCurrentPokemon([])
    }

    const handleNavState = () => {
        if (navInitialState) {
            setNavInitialState(false)
        } else {
            setNavInitialState(true)
        }
    }
    
    const tryAgain = () => {
        getGlobalPokemons()
        
    }

    return (
        <PokedexContext.Provider value={{
            offset,
            loading,
            globalLoading,
            setLoading,
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            allPokemonsTypes, 
            globalPokemons,
            onClickLoadMore,
            currentType,
            filteredPokemons,
            handleButton,
            currentPokemon,
            handlePokemonButton,
            handleExitButton,
            navInitialState,
            handleNavState,
            tryAgain
        }}>
            {children}
        </PokedexContext.Provider>
    ) 
}