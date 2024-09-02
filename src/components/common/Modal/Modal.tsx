import { FC, ReactElement, useContext, useState } from 'react'
import { password, user as constantUser } from '../../../utils/constants';
import './modal.css'
import { UserContext, UserContextI } from '../../../contexts/UserContext';

export interface ModalProps {
    hanldeOpenModal: () => void;
    modalContent?: FC;
}

export const Modal: FC<ModalProps> = (modalProps): ReactElement => {

    const { updateUserInfo } = useContext(UserContext) as UserContextI;


    interface FormValues {
        user: string;
        password: string;
    }

    const [values, setValues] = useState<FormValues>({
        user: '',
        password: ''
    })

    const handleOnChange = (e: any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleOnSubmit = (e: any) => {
        e.preventDefault()
        if (values['user'] === constantUser && values['password'] === password) {
            console.log('Usuario correcto');
            updateUserInfo({
                name: 'Jim',
                email: 'jimloz@gmail.com',
                online: true
            })
        }
        modalProps.hanldeOpenModal()
    }

    return (
        <div className='modal'>
            <div className="modal-content">
                {modalProps.modalContent && <modalProps.modalContent />}
                <div>
                    <h2>
                        Iniciar Sesión
                    </h2>
                    <form
                        className='form'
                        onSubmit={handleOnSubmit}
                    >
                        <label htmlFor="user">user</label>
                        <input type="text" name="user" id="user" onChange={handleOnChange} autoComplete='off' />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={handleOnChange} autoComplete='off' />
                        <button
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>
                <button
                    onClick={modalProps.hanldeOpenModal}
                >Cerrar</button>
            </div>
        </div>
    )

}