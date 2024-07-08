import { PokemonI } from "../../pages/PokemonDetails"
import './pokemon-details.css'

export const PokemonView = ({
    name,
    photo,
    type,
    weight
}: PokemonI) => {
    return (
        <>
            <h1>{name[0]?.toUpperCase() ? name[0]?.toUpperCase() + name.slice(1) : 'Cargando..'}</h1>
            <div
                className="pokemon-details-container"
            >
                <div>
                    <img
                        className="pokemon-image"
                        src={photo}
                        alt='pokemon'
                    />
                    <p> <b>Type: </b> {type}</p>
                    <p> <b>Weight: </b> {weight}</p>
                </div>
            </div>
            <button
                onClick={() => window.history.back()}
            >
                Regresar
            </button>
        </>
    )
}
