import { createContext, useContext, useEffect, useState } from "react";

export interface UserContextI {
    updateUserInfo: (userInfo: UserInfo) => void;
    removeUserInfo: () => void;
    user: {
        name: string;
        email: string;
        online: boolean;
    }
}
export const UserContext = createContext<UserContextI | null>(null);

interface UserInfo {
    name: string;
    email: string;
    online: boolean;
}

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState<UserInfo>({
        name: '',
        email: '',
        online: false
    });

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
    }, [])


    const updateUserInfo = (userInfo: UserInfo) => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        localStorage.setItem('token', JSON.stringify({ token: 'token' }));
        setUser(userInfo);
    }

    const removeUserInfo = () => {

        localStorage.removeItem('userInfo');
        setUser({
            name: '',
            email: '',
            online: false
        })
    }

    return (
        <UserContext.Provider
            value={{ updateUserInfo, user, removeUserInfo }}
        >
            {
                children
            }

        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}
