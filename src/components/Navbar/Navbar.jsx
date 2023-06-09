'use client'
import { Dark } from "../DarkMode/Dark"
import Ruth from '../../../public/images/Ruth.png';
import Image from "next/image";
import Link from "next/link";
import { Btn } from "../UI/Btn";
import {getLoggedInAccount, signOut } from "../../app/api";
import {useState, useEffect} from 'react'
 
export function Navbar(){
    const [user, setUser] = useState(0)
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await getLoggedInAccount();
            setUser(response)
        }
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if(isLoggedIn=='1') fetchData();

        
    },[])
    const signOutHandler = async ()=>{
        await signOut()
        console.log("ffd")
    }
    return( 
            <div>
                <div className="px-20 h-[60px] bg-[#161b22] flex items-center justify-between border-b border-white/[0.1]">
                    <Link href="/"><Image src={Ruth} width={130} alt="Ruth"/></Link>
                    <div className="flex items-center gap-x-6 relative">
                        <Dark/>
                        <button onClick={signOutHandler}>hello</button>
                        {user? <Link href='/'><Btn onClick={signOutHandler} behindBlack={true}>Sign Out</Btn></Link>:<Link href='/register'><Btn behindBlack={true}>Sign Up</Btn></Link>}
                    </div>
                </div>
            </div>
    )
}
