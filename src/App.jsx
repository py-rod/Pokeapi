import './App.css'
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Pokemons } from "./components/Pokemon/Pokemons";
import { HomePage } from "./components/HomePage/HomePage";
import { Search } from "./components/Search/Search";
import { DataPokemon } from './Context/DataPokemon';
import { InfoPokemon } from './components/InfoPokemon/InfoPokemon';

function App() {
  return (
    <>
      <DataPokemon>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route element={<Pokemons />} />
            <Route path='pokemon/:id' element={<InfoPokemon />} />
            <Route element={<Search />} />
          </Route>
        </Routes>
      </DataPokemon>
    </>
  )
}

export default App
