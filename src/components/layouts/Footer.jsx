import { Link } from 'react-router-dom'

function Footer (){
    const anioActual = new Date().getFullYear();

    return(
        <footer>
            <Link to= "/nosotros">
                Acerca de Nosotros
            </Link>
            <a href="#privacidad">
                Política de Privacidad
            </a>
            <p>
                © {anioActual} <span>Antiguedades</span> – Talento Tech Todos los derechos reservados.
            </p>
        </footer>
    )
}

export default Footer