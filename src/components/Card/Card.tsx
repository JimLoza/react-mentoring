import { useAppDispatch } from '../../redux/hooks';
import './card.css';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/slices/carrito';


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

    const  dispatch = useAppDispatch();
    const handleAddToCart = (name: any) => {
        console.log("Si llega" + name)
        dispatch(
            addToCart(
                {
                id : 0,
                name,
                info: "",
                url,
                }
            ),
        );
    };

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
            <div className="card-actions">
                <button
                    onClick={() => handleAddToCart(name)}
                >Add to car</button>
            </div>
        </div>
    )
}
