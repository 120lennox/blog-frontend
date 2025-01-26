'use client'

import Image from "next/image"


export default function Login(){
    return <div>
        <div>
            <div>
                <div>Welcome</div>
                <div>
                    <form action="">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="paassword">Password</label>
                            <input type="password" />
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                        <div>
                            <button>Login with google</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
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