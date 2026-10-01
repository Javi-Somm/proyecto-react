import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/items/ItemListContainer"
import Layout from "./components/layouts/Layout"
import DetalleProducto from "./components/items/DetalleProducto"
import Directorio from "./components/items/Directorio"
import FormProductContainer from "./components/items/FormProductoContainer"

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<h1>Inicio</h1>}/>
          <Route path='/contacto' element={<FormProductContainer/>}/>
          <Route path='/carrito' element={<h1>Carrito</h1>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path="/producto/:id" element={<DetalleProducto/>}/>
          <Route path='/nosotros' element={<Directorio/>}/>
        </Route>
      </Routes>
    </>  
    
  )
}

export default App
