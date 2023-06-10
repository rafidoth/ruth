'use client'
import { Dark } from "../DarkMode/Dark"
import Ruth from '../../../public/images/Ruth.png';
import Image from "next/image";
import Link from "next/link";
import { Btn } from "../UI/Btn";
import {useState, useEffect} from 'react'
import { signOut } from "@/app/api";
export function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState('0')
    
    useEffect(()=>{
        const loggedInStatus = localStorage.getItem('isLoggedIn')
        setIsLoggedIn(loggedInStatus)

    })

    const signOutHandler = async ()=>{
        await signOut()
        localStorage.setItem('isLoggedIn','0');
        setIsLoggedIn('0')
        window.location.href = "/"
    }

    // const getName = async () =>{
    //     if(isLoggedIn==='1'){
    //         const acc = await getLoggedInAccount()
    //         console.log(acc)
    //     }else{
    //         return 'Ruth'
    //     }
    // }
    // const name = getName()

    return( 
            <div>
                <div className="px-20 h-[60px] bg-[#161b22] flex items-center justify-between border-b border-white/[0.1]">
                    <Link href="/"><Image src={Ruth} width={130} alt="Ruth"/></Link>
                    <div className="flex items-center gap-x-6 relative">
                        <Dark/>
                        {/* <h1>Hello, {`${name}`}</h1> */}
                        {isLoggedIn === '1'? <Link href='/'><Btn onClick={signOutHandler} behindBlack={true}>Sign Out</Btn></Link>:<Link href='/register'><Btn behindBlack={true}>Sign Up</Btn></Link>}
                    </div>
                </div>
            </div>
    )
}
