'use client'

import Image from "next/image"
import { google } from "../../navigation/icons"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Cookies from "js-cookie"



export default function Login(){
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //errors
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginError, setLoginError] = useState('')

    const emailValidation = (email:string)=>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        let isValid = true

        if (!email.trim()){
            setEmailError('Email is required')
            isValid = false
        }

        if (!password.trim()){
            setPasswordError('Password is required')
            isValid = false
        }

        if (isValid){
            const userdata = {
                username:email,
                password:password
            }

            //send post request to http://127.0.0.1:8000/api/
            try{
                const response = await axios.post('http://127.0.0.1:8000/api/dj-rest-auth/login', userdata)
                console.log(response.data)

                if(response.status === 200){
                    Cookies.set('authToekn', response.data.key, {expires: 2})
                    router.push('/landing')
                }
            }catch(error){
                setLoginError('Login failed')
            }

        }
        else{
            console.log('failed')
        }

    }

    return <div>
        <div className="flex flex-row justify-between items-center">
            <div className="w-1/2 space-y-20">
                <div className="font-semibold text-[24px]">Welcome back!</div>
                <div>
                    <form className="flex flex-col space-y-5" onSubmit={handleSubmit} action="">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="email_username">Email or Username</label>
                            <input
                                className="bg-[#090D1F] border border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-b-2 focus:border-[#6941C6] p-1"
                                type="text"
                                id="email_username"
                                onChange={(e)=>setEmail(e.target.value)}
                                value={email}
                                 />
                        </div>
                        <div className="flex flex-col w-1/2 py-4">
                            <label htmlFor="paassword">Password</label>
                            <input 
                                className="bg-[#090D1F] border border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-b-2 focus:border-[#6941C6] p-1" type="password"
                                onChange={(e)=>setPassword(e.target.value)}
                                value={password}
                                />
                        </div>
                        <div>
                            <button type="submit" className="bg-white text-[#090D1F] w-1/2 rounded-full py-1 ">Login</button>
                        </div>
                        <div className="bg-white text-[#090D1F] w-1/2 rounded-full py-1 flex flex-row justify-center items-center">
                            {google.icon}
                            <button className="text-[#090D1F] w-1/2 py-1 items-center">Login with google</button>
                        </div>

                    </form>
                </div>
            </div>
            <div className="w-1/2 mt-10">
                <Image
                    src="/backgroundLogin.svg"
                    alt="background image"
                    width={696}
                    height={801}
                />
            </div>
        </div>
    </div>
}