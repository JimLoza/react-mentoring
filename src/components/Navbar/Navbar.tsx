import { FC, ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Modal: FC = (): ReactElement => {
    return (
        <div className='modal'>
            <div className="modal-content">
                <h1>Modal</h1>
                <p>Modal</p>
                <button
                >Cerrar</button>
            </div>
        </div>
    )

}

export const Navbar: FC = (): ReactElement => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/`)
    }
    const handleOpenModal = () => {
        setOpen(!open)
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
                    onClick={handleOpenModal}
                >
                    Login
                </p>
            </div>
            {
                open && <Modal />
            }
        </nav>
    )
}
