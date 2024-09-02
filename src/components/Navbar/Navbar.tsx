import { FC, ReactElement, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../common/Modal/Modal'
import { UserContext, UserContextI } from '../../contexts/UserContext';
import profilePhoto from '../../assets/profile/1.jpg';
import './navbar.css'

export const Navbar: FC = (): ReactElement => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    const { user, removeUserInfo } = useContext(UserContext) as UserContextI;

    const handleLogout = () => {
        removeUserInfo();
    }

    const handleOpenModal = () => {
        setOpen(!open)
    }
    const handleNavigation = () => {
        navigate(`/`)
    }
    return (
        <nav
            className='navbar'
        >

            <div className="nav-item">
                <img
                    className='logo'
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
                    alt=""
                />

            </div>

            <div className="nav-item">
                <p
                    onClick={handleNavigation}
                >
                    Home
                </p>
            </div>
            <div className="nav-item-right">
                <p
                    onClick={user.online ? handleLogout : handleOpenModal}
                >
                    {
                        user.online ? 'Logout' : 'Login'
                    }
                </p>
                {
                    user.online &&
                    <div className="profile-photo">
                        <img src={profilePhoto} alt="dui" className='profile-photo-nav' />


                    </div>
                }
            </div>
            {
                open && <Modal hanldeOpenModal={handleOpenModal} />
            }
        </nav>
    )
}
