import { useState, useEffect } from "react"
import ItemList from './ItemList'

function ItemListContainer (){
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)
    
    useEffect(() => {
        fetch('/datos/productos.json')
            .then((respuesta) => {
                if(!respuesta.ok) {
                    throw new Error('No se pudo cargar los productos.')
                }
                return respuesta.json()
            })
            .then((datos) => {
                setProductos(datos)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setCargando(false)
            })
    }, [])

    if(cargando) {
        return <p>Cargando...</p>
    }
    if(error) {
        return <p>Error: {error}</p>
    }

    return(
        <ItemList productos = {productos} />
    )
}

export default ItemListContainer