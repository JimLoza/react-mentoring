import { useParams } from 'react-router-dom';
// import { URL } from '../utils/constants';
// import { useEffect, useState } from 'react';
import { PokemonView } from '../components/PokemonDetails/PokemonView';
import { NotFound } from '../components/errors/404/NotFound';
import { useLoadPokemon } from '../hooks/useLoadPokemon'

export interface PokemonI {
    name: string,
    photo: string,
    type: string,
    weight: number,
}

export const PokemonDetails = () => {
    const { name } = useParams()

    const { error, pokemon, load } = useLoadPokemon(name)




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
