/**
 * AuthProvider shares the authentication state in all the pages
 */

import { createContext, useState, useContext, useEffect, Children } from 'react';
import Cookies from 'js-cookie';
import { getUser } from '@/app/lib/data';

interface AuthContextType{
    user: string
    isAuntenticated: boolean
    checkAuth: () => Promise<void>;   
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    checkAuth: async () => {},
})

export const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const checkAuth = async() =>{
        const token = Cookies.get('authToken')

        if (!token) return;

        const response = await getUser(token)

        if (response.status === 200){
            setUser(response.data)
            setIsAuthenticated(true)
        }
        else{
            Cookies.remove('authToken')
            setIsAuthenticated(false)
            setUser(null)
        } 
    }

    useEffect(() =>{
        checkAuth()
    }, [])

    return (
       
    );
}