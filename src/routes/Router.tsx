import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PokemonDetails } from '../pages/PokemonDetails';

export const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:id" element={<PokemonDetails />} />
            </Routes>
        </Router>
    )
}
