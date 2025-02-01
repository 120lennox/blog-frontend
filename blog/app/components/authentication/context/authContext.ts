/**
 * AuthProvider shares the authentication state in all the pages
 */

import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { getUser } from '@/app/lib/data';

const AuthContext = createContext(null)

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
}