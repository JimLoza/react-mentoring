import './card.css';
import { useNavigate } from 'react-router-dom';


interface PropTypesCardI {
    name: string;
    url: string;
    onClick?: () => void;
}

export const Card = ({ name, url }: PropTypesCardI) => {
    const navigate = useNavigate();


    const handleOnClik = () => {
        navigate(`/details/${name}`)
        console.log('Click', url);

    }

    return (
        <div className='card'>
            <div className="card-name">
                <h1>{name}</h1>
            </div>
            <hr className='card-divider' />
            <div className="card-actions">
                <button
                    onClick={handleOnClik}
                >Ver más</button>
            </div>
        </div>
    )
}
