
import { Dark } from "../DarkMode/Dark"


export function Navbar(){
    return(
        <div className="container-fluid mx-auto px-4 h-[80px] bg-ruth-900  ">
            <h1 className="text-3xl">hello nav</h1>
            <Dark/>
        </div>
    )
}