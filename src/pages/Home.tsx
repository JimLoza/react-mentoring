import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css'
import { Card } from '../components/Card/Card';
import { URL } from '../utils/constants';

interface PokemonDataI {
    data: any[];
    metadata: {
        next: string;
        previous: string;
    }
}

export const Home = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState<{ search: string }>({
        search: ''
    });

    const [pokemons, setPokemons] = useState<PokemonDataI>({
        data: [],
        metadata: {
            next: '',
            previous: ''
        }
    })

    const getData = async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    const handleSearch = async () => {
        navigate(`/details/${values.search}`)
        setValues({
            search: ''
        })
    }
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }


    useEffect(() => {
        getData(URL).then((data) => {
            setPokemons({
                data: data.results,
                metadata: {
                    next: data.next,
                    previous: data.previous
                }
            })
        })

    }, [])

    const handleOnClickNext = () => {
        getData(pokemons.metadata.next).then((data) => {
            setPokemons({
                data: data.results,
                metadata: {
                    next: data.next,
                    previous: data.previous
                }
            })
        })
    }
    const handleOnClickPrevious = () => {
        getData(pokemons.metadata.previous).then((data) => {
            setPokemons({
                data: data.results,
                metadata: {
                    next: data.next,
                    previous: data.previous
                }
            })
        })
    }

    return (
        <div>
            <div
                className='search-container'
            >
                <h1>Busca un Pokemon</h1>
                <input name='search' id='search' onChange={handleOnChange} type='text' value={values.search} />
                <button
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <hr />
            <div className="pokemon-container">
                <h1>Pokemones</h1>
                <div className="pokemons-list">
                    {
                        pokemons.data.map((pokemon: any) => {
                            return (
                                <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} onClick={handleSearch} />
                            )
                        })
                    }
                </div>
                <div className="pokemon-footer">
                    <button
                        onClick={handleOnClickPrevious}
                        className={pokemons.metadata.previous ? '' : 'button-previous-disabled'}
                        disabled={!pokemons.metadata.previous}
                    >Anterior</button>
                    <button
                        onClick={handleOnClickNext}
                    >Siguiente</button>
                </div>
            </div>
        </div>
    )
}
