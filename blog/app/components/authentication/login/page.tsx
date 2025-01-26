'use client'

import Image from "next/image"


export default function Login(){
    return <div>
        <div className="flex flex-row justify-between items-center">
            <div className="w-1/2 space-y-20">
                <div className="font-semibold text-[24px]">Welcome back!</div>
                <div>
                    <form className="flex flex-col space-y-5" action="">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="email">Email</label>
                            <input className="bg-[#090D1F] border border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-b-2 focus:border-[#6941C6] p-1" type="text" />
                        </div>
                        <div className="flex flex-col w-1/2 py-4">
                            <label htmlFor="paassword">Password</label>
                            <input className="bg-[#090D1F] border border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-b-2 focus:border-[#6941C6] p-1" type="password" />
                        </div>
                        <div>
                            <button className="bg-white text-[#090D1F] w-1/2 rounded-full py-1 ">Login</button>
                        </div>
                        <div>
                            <button className="bg-white text-[#090D1F] w-1/2 rounded-full py-1">Login with google</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-1/2">
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