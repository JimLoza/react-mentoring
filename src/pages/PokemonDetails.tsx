import { useParams } from 'react-router-dom';
import { URL } from '../utils/constants';
import { useEffect, useState } from 'react';
import { PokemonView } from '../components/PokemonDetails/PokemonView';
import { NotFound } from '../components/errors/404/NotFound';

export interface PokemonI {
    name: string,
    photo: string,
    type: string,
    weight: number,
}

export const PokemonDetails = () => {
    const { name } = useParams()

    const [pokemon, setPokemon] = useState<PokemonI>({
        name: '',
        photo: '',
        type: '',
        weight: 0,
    })

    const [error, setError] = useState(false)

    const getData = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Error: ', error);
            setError(true)
        }
    }


    useEffect(() => {
        getData(`${URL}/${name}`)
            .then((data: any) => {
                setPokemon({
                    name: data.name,
                    photo: data?.sprites?.other?.dream_world?.front_default,
                    type: data.types[0].type.name,
                    weight: data.weight
                })
            })

    }, [])



    return (
        <div>
            {
                error
                    ?
                    <NotFound />
                    :
                    <PokemonView
                        name={pokemon.name}
                        photo={pokemon.photo}
                        type={pokemon.type}
                        weight={pokemon.weight}
                    />
            }
        </div>
    )
}
