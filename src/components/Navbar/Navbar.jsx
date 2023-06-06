'use client'
import { Dark } from "../DarkMode/Dark"
import Ruth from '../../../public/images/Ruth.png';
import Image from "next/image";
import Link from "next/link";
import { Btn } from "../UI/Btn";
import {getLoggedInAccount, getSessions} from "../../app/api";
import {useState, useEffect, useContext} from 'react'
import { UserCircleIcon } from "@heroicons/react/24/solid";

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

    return(
        <>  
            <div>
                <div className="px-20 h-[60px] bg-[#161b22] flex items-center justify-between border-b border-white/[0.1]">
                    <Link href="/"><Image src={Ruth} width={130} alt="Ruth"/></Link>
                    <div className="flex items-center gap-x-6">
                        <Dark/>
                        {user? <UserCircleIcon className="h-6 w-6 text-amber-400"/>:<Link href='/register'><Btn behindBlack={true}>Sign Up</Btn></Link>}
                    </div>
                </div>
            </div>
        </>
    )
}
