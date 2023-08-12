import React, {useEffect, useState, createContext} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Items from './pages/Items';
import Moves from './pages/Moves';
import Abilities from './pages/Abilities';
import Header from './layouts/Header';
import PokemonDetail from './pages/Pokemons/PokemonDetail';
import './App.css';
import About from './pages/Pokemons/About';
import PokemonMove from './pages/Pokemons/PokemonMove';
import Evolution from './pages/Pokemons/Evolution';
import Stats from './pages/Pokemons/Stats';
import {PokemonSearchProvider} from './context/PokemonSearchContext';
import PokemmonDataContext from './context/PokemonDataContext';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [location.pathname])

  return(
    <PokemmonDataContext>
      <PokemonSearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />

            <Route element={<Header />}>
                <Route path="pokemons" element={<Pokedex />} />
                <Route path="items" element={<Items />} />
                <Route path="moves" element={<Moves />} />
                <Route path="abilities" element={<Abilities />} />
            </Route>

            <Route path="pokemons/:id" element={<PokemonDetail/>}>
              <Route index element={< About />}  />
              <Route path="stats" element={<Stats />}/>
              <Route path="evolution" element={<Evolution />}/>
              <Route path="moves" element={<PokemonMove />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </PokemonSearchProvider>
    </PokemmonDataContext>
  )
}
export default App
