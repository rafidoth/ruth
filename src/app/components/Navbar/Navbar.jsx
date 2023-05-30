import { Dark } from "../DarkMode/Dark"
import Ruth from '../../../../public/images/Ruth.png';
import Image from "next/image";


export function Navbar(){
    return(
        <>
            <div>
                <div className="px-20 h-[60px] bg-zinc-950 flex items-center justify-between border-b border-white/[0.1]">
                    <Image src={Ruth} width={130} alt="Ruth"/>
                    <div className="w-10">
                        <Dark/>
                    </div>
                </div>
            </div>
        </>
    )
}