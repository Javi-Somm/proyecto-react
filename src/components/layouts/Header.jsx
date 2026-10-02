import Nav from "./Nav"
import { Link } from "react-router-dom"

function Header (){
    return(
        <header>
            <Link to= "/">
                <h1>Antiguedades</h1>
            </Link>
            <Nav/>
        </header>
    )
}

export default Header