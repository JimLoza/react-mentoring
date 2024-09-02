import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PokemonDetails } from '../pages/PokemonDetails';
import { Navbar } from '../components/Navbar/Navbar';
import { PrivateRoute } from './PrivateRoute';
import { NotFound } from '../components/errors/404/NotFound';

export const RouterComponent = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/404' element={<NotFound />} />
                <Route path="/details/:name" element={<PrivateRoute> <PokemonDetails /> </PrivateRoute>} />
            </Routes>
        </Router>
    )
}
