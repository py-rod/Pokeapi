import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./InfoPokemon.css"

export const InfoPokemon = () => {
    // UTILIZANDO USEPARAMS PARA OBTENER EL ID YA QUE ES UNA URL DINAMICA
    const { id } = useParams()


    const [datapokemonid, setDataPokemonId] = useState({})
    const [types, setTypes] = useState([])
    const [abilities, setAbility] = useState([])
    const [stats, setStats] = useState([])




    const GetDataPokemonId = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result = await response.json()
        setDataPokemonId(result)
    }


    const GetTypes = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result = await response.json()
        setTypes(result.types)
    }


    const GetAbilities = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result = await response.json()
        setAbility(result.abilities)
    }

    const GetStats = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result = await response.json()
        setStats(result.stats)
    }

    useEffect(() => {
        GetDataPokemonId();
        GetTypes();
        GetAbilities();
        GetStats();
    }, [id])


    return (
        <>
            <main>
                <section className="section-info-poke">
                    <div>
                        <h2>#{datapokemonid.id}</h2>
                        <div>
                            <h3>{datapokemonid.name}</h3>
                            <img src={datapokemonid.sprites?.other.dream_world.front_default} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="content-info-types ">
                                {types.map(type => (
                                    <p key={type.type.name} className={type.type.name}>{type.type.name}</p>
                                ))}
                            </div>
                            <div style={{ padding: "30px 0" }}>
                                <h4 style={{ marginLeft: "20px" }}>Abilities</h4>
                                <ol style={{ textAlign: "left", padding: "20px 30px" }}>
                                    {abilities.map(abi => (
                                        <li style={{ textTransform: "capitalize" }} key={abi.ability.name}>{abi.ability.name}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ textAlign: "left" }}>Stats</h3>
                            <div>
                                {stats.map(stats => (
                                    <p key={stats.stat.name}>{stats.stat.name}: <span style={{ marginLeft: "20px" }}>{stats.base_stat}</span></p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}