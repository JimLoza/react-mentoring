import { useContext } from 'react'
import { UserContext, UserContextI } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: any) => {
    const { user } = useContext(UserContext) as UserContextI;
    const token = localStorage.getItem('token');
    const isAuth: boolean = user.online && token ? true : false;
    return (
        isAuth ? children : <Navigate to='/404' />
    )
}
