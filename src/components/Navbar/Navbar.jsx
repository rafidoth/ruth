'use client'
import { Dark } from "../DarkMode/Dark"
import Ruth from '../../../public/images/Ruth.png';
import Image from "next/image";
import Link from "next/link";
import { Btn } from "../UI/Btn";
import {useState, useEffect} from 'react'
import { signOut } from "@/app/api";


export function Navbar(){
    const local = localStorage.getItem('user')

    const [user, setUser] = useState({
        isLoggedIn : '0',
        name :''
    })
    
    useEffect(()=>{
        if(local){
            setUser({
                isLoggedIn : '1',
                name : JSON.parse(local).name
            })
        }else{
            setUser({
                isLoggedIn : '0',
                name : 'Ruth'
            })
        }
    },[])

    

    const signOutHandler = async ()=>{
        await signOut()
        localStorage.removeItem('user')
        setUser({...user, isLoggedIn : '0'})
        window.location.href = "/"
    }


    return( 
            <div>
                <div className="px-20 h-[60px] bg-[#161b22] flex items-center justify-between border-b border-white/[0.1]">
                    <Link href="/"><Image src={Ruth} width={130} alt="Ruth"/></Link>
                    <div className="flex items-center gap-x-6 relative">
                        <Dark/>
                        <h1>Hello, <span className="text-amber-400">{`${user.name}`}</span></h1>
                        {user.isLoggedIn === '1'? <Link href='/'><Btn onClick={signOutHandler} behindBlack={true}>Sign Out</Btn></Link>:<Link href='/register'><Btn behindBlack={true}>Sign Up</Btn></Link>}
                    </div>
                </div>
            </div>
    )
}
