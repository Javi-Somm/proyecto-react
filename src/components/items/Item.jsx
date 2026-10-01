import { Link } from 'react-router-dom'
import { useState } from 'react'
import BotonCarrito from '../BotonCarrito'
import style from './Item.module.css'

function Item ({id, nombre, precio, imagen}){
    

    return(
        <div className={style.contenedor}>
            <Link to={`/producto/${id}`}>
                <img src= {imagen} alt= {nombre} width= "100px" />
            </Link>

            <Link to={`/producto/${id}`}>
                <h3>{nombre}</h3>
            </Link>

            <h4>AR$ {precio}</h4>

            <BotonCarrito/>
        </div>
    )
}
export default Item