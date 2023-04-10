import React, { useContext } from "react";
import { PokemonContext } from "../../Context/PokemonContext";
import { Pokemons } from "../Pokemon/Pokemons";

export function HomePage() {

    return (
        <>
            <main>
                <section className="section-pokemons">
                    <Pokemons />
                </section>
            </main>
        </>
    )
}