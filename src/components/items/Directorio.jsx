import { useState, useEffect } from "react"
import TarjetaContacto from "./TarjetaContacto"

function Directorio () {
    const [personas, setPersonas] = useState([])
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        fetch('/datos/nosotros.json')
            .then((respuesta) => {
                if(!respuesta.ok) {
                    throw new Error('No se pudo cargar la informacion de nosotros.')
                }
                return respuesta.json()
            })
            .then((datos) => {
                setPersonas(datos)
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
        <>
            {personas.map((persona) => (
                <TarjetaContacto key={persona.id} {...persona}/>
            ))}
        </>
    )
}

export default Directorio