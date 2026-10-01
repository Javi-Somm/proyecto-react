import Nav from "./Nav"
import { Link } from "react-router-dom"

function Header (){
    return(
        <header>
            <Link to= "/">
                Antiguedades
            </Link>
            <Nav/>
        </header>
    )
}

export default Header