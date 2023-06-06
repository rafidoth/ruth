'use client'


import { useEffect, useState } from "react";
import { getAccount, getSessions } from "../api";

export default function Page(){
    useEffect(()=>{
        // const fetchData = async ()=>{
        //     await getAccount();
        //     await getSessions();
        // }
        // fetchData()
    },[])
    return(<h1>Welcome</h1>)
}