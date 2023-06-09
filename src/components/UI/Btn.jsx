
const Btn =({children, onClick,behindBlack, type})=>{
    return(
        <button onClick={onClick} type={type} className={`${behindBlack? 'border-white/[0.4] px-5 py-1 text-sm text-white':' border-black/[0.1] text-black px-9 py-2'} border text-semibold text-sm  rounded-full z-10 cursor-pointer  bg-transparent dark:text-white  dark:bg-zinc-950  dark:border-white/[.1] dark:hover:bg-white/[0.1] hover:border-amber-400`}>{children}</button>
    )
}

export {Btn}