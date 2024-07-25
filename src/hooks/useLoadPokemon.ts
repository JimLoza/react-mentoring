import { useEffect, useState } from "react"
import { PokemonI } from "../pages/PokemonDetails"
import { URL } from '../utils/constants';

export const useLoadPokemon = (pokemonInfo: any) => {
    const [pokemon, setPokemon] = useState<PokemonI>({
        name: '',
        photo: '',
        type: '',
        weight: 0,
    })
    const [error, setError] = useState(false)
    const [load, setLoad] = useState(false)

    const getData = async (url: string) => {
        setLoad(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Error: ', error);
            setError(true)
        } finally {
            setLoad(false)
        }
    }

    useEffect(() => {
        getData(`${URL}/${pokemonInfo}`)
            .then((data: any) => {
                setPokemon({
                    name: data.name,
                    photo: data?.sprites?.other?.dream_world?.front_default,
                    type: data.types[0].type.name,
                    weight: data.weight
                })
            })

    }, [pokemonInfo])

    return { pokemon, error, load }

}