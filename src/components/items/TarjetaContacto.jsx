function TarjetaContacto ({foto, nombre, puesto, email}) {
    return(
        <div>
            <img src= {foto} alt= {nombre} />
            <h3>{nombre}</h3>
            <p>{puesto}</p>
            <p>{email}</p>
        </div>
    )
}

export default TarjetaContacto