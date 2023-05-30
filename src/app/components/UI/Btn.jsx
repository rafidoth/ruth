import { jetBrain } from "@/app/util/font"

const Btn =({children, colorClass})=>{
    return(
        <button className={`${colorClass, jetBrain}  text-white text-semibold text-lg px-9 py-2 rounded-full z-10 cursor-pointer border border-white/[.3] hover:bg-white/[0.1] hover:border-amber-400`}>{children}</button>
    )
}

export {Btn}