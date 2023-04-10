import React, { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import axios from "axios"
import { Pokemons } from "../components/Pokemon/Pokemons";
import { Search } from "../components/Search/Search";


export const DataPokemon = ({ children }) => {

    // AUMENTO DE POKEMONES
    const [aumento, setAumento] = useState(0);

    // OBTENIENDO DATA DE LOS POKEMONS
    const [getpokemons, setGetPokemons] = useState([]);

    // PARA EL BUSCADOR DE POKEMONES
    const [name_poke, setNamePoke] = useState("")
    const [data_search, setDataSearch] = useState([])
    const [activate, setActivate] = useState(false)


    // OBTENIENDO LOS POKEMONES
    const GetPokemons = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${aumento}`);
        const result = await response.json();

        const data = result.results.map(async (pokemon) => {
            const result = await fetch(pokemon.url)
            const data = await result.json()
            return data
        })

        const result_data = await Promise.all(data)
        setGetPokemons([...getpokemons, ...result_data])

    }


    useEffect(() => {
        GetPokemons()
    }, [aumento])



    // BUSCADOR DE POKEMON
    const SearchPokemon = () => {
        const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${name_poke}`)
            .then(result => setDataSearch(result.data))
    }

    const GetInputValue = (element) => {
        setNamePoke(element.target.value.toLowerCase())
    }

    const PushSearchPokemon = () => {
        setActivate(true)
        SearchPokemon()
    }



    // PARA EL FILTRADO DE POKEMONS
    const [selectFilter, setSelectFilter] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
        shadow: false,
    })

    const [allPokemons, setAllPokemons] = useState([])
    const [pokeFilter, setPokeFilter] = useState([])
    const [activateFilter, setActivateFilter] = useState(false)


    const GetAllPokemonFilter = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`);
        const result = await response.json();

        const data = result.results.map(async (pokemon) => {
            const result = await fetch(pokemon.url)
            const data = await result.json()
            return data
        })

        const result_data = await Promise.all(data)
        console.log(result_data)
        setAllPokemons([result_data])

    }


    useEffect(() => {
        GetAllPokemonFilter();
    }, [])

    // FILTRO POKEMON
    const GetFilterChecked = (element) => {
        setSelectFilter({
            ...selectFilter,
            [element.target.name]: element.target.checked
        })
        console.log(allPokemons)
    }







    return (
        <PokemonContext.Provider value={{
            // POKEMONS INIT
            aumento,
            setAumento,
            getpokemons,


            // SEARCH POKEMON
            data_search,
            name_poke,
            PushSearchPokemon,
            GetInputValue,
            activate,
            setActivate,

            // FILTER POKEMON
            GetFilterChecked,
            pokeFilter
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

