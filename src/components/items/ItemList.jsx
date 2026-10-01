import Item from './Item'
function ItemList ({productos}){
    return(
        <>
        {productos.map(producto => (
            <Item key={producto.id} {...producto} />
        ))}
        </>
    )
}

export default ItemList