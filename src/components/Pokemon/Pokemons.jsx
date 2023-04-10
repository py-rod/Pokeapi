import React, { useContext } from "react";
import { PokemonContext } from "../../Context/PokemonContext";
import "./Pokemons.css"
import menu_poke from "../../assets/icons/menu-poke.svg"
import SVGComponent from "./Svgcomponent";
import { Link } from "react-router-dom";
import { Search } from "../Search/Search";
import FilterPokemon from "../PokemonFilter/PokemonFilter";


export function Pokemons() {
    const { aumento, setAumento, getpokemons, activate, setActivate, data_search } = useContext(PokemonContext)


    const data = getpokemons.map(data => {
        return (
            <Link to={`/pokemon/${data.id}`} key={data.id} className="info-pokemon" style={{ textDecoration: "none" }}>
                <div className="content-card">
                    <img src={data.sprites.front_default} alt={data.name} />
                    <div>
                        <h1>{data.name}</h1>
                        {data.types[1] ?
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className={data.types[0].type.name}>{data.types[0].type.name}</p>
                                <p className={data.types[1].type.name}>{data.types[1].type.name}</p>
                            </div>
                            :
                            <div>
                                <p className={data.types[0].type.name}>{data.types[0].type.name}</p>
                            </div>
                        }
                    </div>
                </div>
            </Link>
        )
    })




    return (
        <>
            <div className="pokedex">
                <div>
                    <div>
                        <div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>

                            </div>
                        </div>
                        <div>
                            <div>

                            </div>
                        </div>
                        <div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "block", width: "100%" }}>
                    <SVGComponent />
                </div>


                {activate ?
                    <div className="content-view-pokemons">
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="content-pokemons">
                            <Link to={`/pokemon/${data_search.id}`} key={data_search.id} className="info-pokemon" style={{ textDecoration: "none" }}>
                                <div className="content-card">
                                    <img src={data_search.sprites?.front_default} alt={data_search.name} />
                                    <div>
                                        <h1>{data_search.name}</h1>
                                    </div>
                                </div>
                            </Link>
                            <button onClick={() => setActivate(false)} className="button-fetch-pokes">Back</button>
                        </div>
                        <div>
                            <div>
                                <div>

                                </div>
                            </div>
                            <img src={menu_poke} alt="icono aqui" />
                        </div>
                    </div>
                    :
                    <div className="content-view-pokemons">
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="content-pokemons">
                            {data}
                            <button onClick={() => setAumento(aumento + 50)} className="button-fetch-pokes">Fetch more pokemons</button>
                        </div>
                        <div>
                            <div>
                                <div>

                                </div>
                            </div>
                            <img src={menu_poke} alt="icono aqui" />
                        </div>
                    </div>

                }

                <div className="content-input-search">
                    <Search />
                </div>
                <FilterPokemon />
            </div>
        </>
    )
}