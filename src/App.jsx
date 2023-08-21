import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Pokedex from './pages/Pokedex';
import Items from './pages/Items';
import Abilities from './pages/Abilities';
import Header from './layouts/Header';
import PokemonDetail from './pages/Pokemons/PokemonDetail';
import './App.css';
import About from './pages/Pokemons/About/About';
import PokemonMove from './pages/Pokemons/PokemonMove';
import Evolution from './pages/Pokemons/Evolution';
import Stats from './pages/Pokemons/Stats/Stats';
import { PokemonSearchProvider } from './context/PokemonSearchContext';
import { PokedexProvider } from './context/PokedexContext';
import { ItemsProvider } from './context/ItemsContext';
import { AbilitiesProvider } from './context/AbilitiesContext';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Moves from './pages/Pokemons/Moves';
import { MovesProvider } from './context/MovesContext';

function App() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [location.pathname])
  
  return(
        <PokemonSearchProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                
                <Route element={<Header />}>
                    <Route path="pokemons" element={
                      <PokedexProvider>
                        <Pokedex />
                      </PokedexProvider>} />
                    <Route path="items" element={
                       <ItemsProvider>
                         <Items />
                       </ItemsProvider>} />
                    <Route path="moves" element={
                       <MovesProvider>
                        <Moves />
                       </MovesProvider>} />
                    <Route path="abilities" element={
                       <AbilitiesProvider>
                           <Abilities />
                       </AbilitiesProvider>
                    } />
                </Route>
                
                <Route path="pokemons/:id" element={
                  <PokedexProvider>
                    <PokemonDetail />
                  </PokedexProvider>}>
                     <Route index element={< About />}  />
                     <Route path="stats" element={<Stats />}/>
                     <Route path="evolution" element={<Evolution />}/>
                     <Route path="moves" element={<PokemonMove />}/>
                </Route>
              </Routes>
          </BrowserRouter>
        </PokemonSearchProvider>
  )
}
export default App
