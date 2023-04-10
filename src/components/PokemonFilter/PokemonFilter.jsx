import { PokemonContext } from "../../Context/PokemonContext";
import React, { useContext } from "react";




function FilterPokemon() {

    const { GetFilterChecked, pokeFilter } = useContext(PokemonContext)


    return (
        <>
            <div>
                <label htmlFor="grass">Grass</label>
                <input type="checkbox" name="grass" id="grass" onChange={GetFilterChecked} />
            </div>
            <div>
                <label htmlFor="normal">normal</label>
                <input type="checkbox" name="normal" id="normal" />
            </div>
            <div>
                <label htmlFor="fighting">fighting</label>
                <input type="checkbox" name="fighting" id="fighting" />
            </div>
            <div>
                <label htmlFor="flying">flying</label>
                <input type="checkbox" name="flying" id="flying" />
            </div>
        </>
    )
}



export default FilterPokemon