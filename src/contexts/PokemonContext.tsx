import { createContext, useContext, useState } from 'react';

const PokemonContext = createContext({})
export const PokemonProvider = ({ children }: any) => {
    const [pokemon, setPokemon] = useState('');

    const updatePokemon = (pokemonInfo: string) => {
        setPokemon(pokemonInfo);
    }

    return (
        <PokemonContext.Provider value={{ pokemon, updatePokemon }}>
            {
                children
            }
        </PokemonContext.Provider>
    )
}


export const usePokemon = () => {
    return useContext(PokemonContext);
};