import { Dark } from "../DarkMode/Dark"
import Ruth from '../../../../public/images/Ruth.png';
import Image from "next/image";


export function Navbar(){
    return(
        <>
            <div>
                <div className="px-4 h-[60px] bg-zinc-950 flex items-center justify-between">
                    <Image src={Ruth} width={130} alt="Ruth"/>
                    <div className="w-10 pr-20">
                        <Dark/>
                    </div>
                </div>
                <div className="h-[2px] bg-yellow-500 "></div>
            </div>
        </>
    )
}