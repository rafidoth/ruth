'use client'
import { Dark } from "../DarkMode/Dark"
import Ruth from '../../../public/images/Ruth.png';
import Image from "next/image";
import Link from "next/link";
import { Btn } from "../UI/Btn";
import {getCurrentLoggedInUser} from "../../app/api";
import {useState, useEffect} from 'react'



export function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState(0);
    useEffect(()=>{
        try{
            const response = getCurrentLoggedInUser();
            setIsLoggedIn(response);
        }catch(err){
            setIsLoggedIn(0);
            console.log("hello")
        }
        
    },[])
    return(
        <>
            <div>
                <div className="px-20 h-[60px] bg-zinc-950 flex items-center justify-between border-b border-white/[0.1]">
                    <Link href="/"><Image src={Ruth} width={130} alt="Ruth"/></Link>
                    <div className="flex items-center gap-x-6">
                        <Dark/>
                        <Link href='/register'><Btn behindBlack={true}>Sign Up</Btn></Link>
                    </div>
                </div>
            </div>
            {console.log(isLoggedIn)}
        </>
    )
}
