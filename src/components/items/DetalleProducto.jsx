import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import BotonCarrito from '../BotonCarrito'

function DetalleProducto(){
    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/datos/productos.json')
            .then((respuesta) => {
                if(!respuesta.ok) {
                    throw new Error('No se pudo cargar el producto.')
                }
                return respuesta.json()
            })
            .then((datos) => {
                const productoEncontrado = datos.find(
                    (producto) => producto.id === Number(id)
                )
                setProducto(productoEncontrado)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setCargando(false)
            })
    }, [id])

    if(cargando) {
        return <p>Cargando...</p>
    }
    if(error) {
        return <p>Error: {error}</p>
    }

    return(
        <div>
            <img src= {producto.imagen} alt= {producto.nombre} width= "300px"/>
            <h2>{producto.nombre}</h2>
            <h3>{producto.precio}</h3>
            <p>{producto.descripcion}</p>
            <BotonCarrito/>
            <Link to= "/productos">
                Volver
            </Link>
        </div>
    )
}

export default DetalleProducto