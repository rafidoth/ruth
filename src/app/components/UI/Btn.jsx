import { jetBrain } from "@/app/util/font"

const Btn =({children, colorClass})=>{
    return(
        <button className={`${colorClass, jetBrain}  dark:text-white text-semibold text-lg px-9 py-2 rounded-full z-10 cursor-pointer border border-black/[0.1] bg-white dark:bg-zinc-950 dark:border-white/[.1] dark:hover:bg-white/[0.1] hover:border-amber-400`}>{children}</button>
    )
}

export {Btn}