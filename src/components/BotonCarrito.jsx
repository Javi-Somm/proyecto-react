import { useState } from 'react'
import style from './BotonCarrito.module.css'

function BotonCarrito(){
    const [agregar, setAgregar] = useState(false)

    const agregado = () => {
        setAgregar(!agregar)
    }

    return(
        <button
            onClick={agregado}
            className={`${style.botonAgregar} ${agregar ? style.botonQuitar : ''}`}
        >
            <i class="fa-solid fa-cart-shopping"></i>
        </button>
    )
}

export default BotonCarrito