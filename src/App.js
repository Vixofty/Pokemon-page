import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import PokedexContainer from './Components/Pokedex/PokedexContainer';
import PokewordleContainer from './Components/Pokewordle/PokewordleContainer';
import Nav from './Components/Nav/Nav';
import './App.css';
import { PokemonsPage } from './Components/Pokedex/PokedexComponents/PokemonsPage';
import { SearchPage } from './Components/Pokedex/PokedexComponents/SearchPage';

const router = createBrowserRouter( createRoutesFromElements(
    <Route path="/" element={ <Nav/> }>
      <Route path="pokedex" element={ <PokedexContainer/> }>
        <Route index element={ <PokemonsPage/> } />
        <Route path='search' element={ <SearchPage/> } />
      </Route>
      <Route path="pokewordle" element={ <PokewordleContainer/> }/>
    </Route>
    
  
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
