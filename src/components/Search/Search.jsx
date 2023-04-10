import React, { Component, useContext, useState } from "react";
import { PokemonContext } from "../../Context/PokemonContext";
import "./Search.css"




export class Search extends Component {

    static contextType = PokemonContext

    render() {
        const { GetInputValue, PushSearchPokemon } = this.context

        return (
            <>
                <input type="text" onChange={GetInputValue} className="input-search" placeholder="Search pokemon" />
                <button onClick={PushSearchPokemon} className="button-search-pokemon">Buscar</button>
            </>
        )
    }

}

