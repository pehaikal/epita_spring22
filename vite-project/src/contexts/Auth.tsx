import { createContext, FC, ReactNode, useState } from 'react';

export const AuthContext = createContext({
    isAuth: false,
    updateAuth: (authValue: boolean) => {}
})

const AuthProvider: FC<{ children: ReactNode }> = ({children}) => {
    
    const [isAuth, setIsAuth] = useState(false);
    
    const updateAuth = (authValue: boolean) => {
        setIsAuth(authValue);
    }

    return <AuthContext.Provider value={{ isAuth, updateAuth }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;