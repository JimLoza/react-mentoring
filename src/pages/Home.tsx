import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/pokemon/1')
    }


    return (
        <div>
            <h1>Home</h1>

            <div>
                <input type='text' />
                <button
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    )
}
