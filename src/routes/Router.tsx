import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PokemonDetails } from '../pages/PokemonDetails';
import { Navbar } from '../components/Navbar/Navbar';

export const RouterComponent = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:name" element={<PokemonDetails />} />
            </Routes>
        </Router>
    )
}
