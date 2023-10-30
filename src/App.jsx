import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/navBar/navBar'
import ItemListContainer from './component/itemListConteiner/itemListContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Bienvenida from './component/bienvenida/bienvenida'
import NotFound from './component/notFound/notFound'
import ItemDetailConteiner from './component/itemDetailContainer/itemDetailContainer'

function App() {
  const [count, setCount] = useState(0)
  //    <ItemListContainer greeting="Bienvenido a Tienda La Pietá"/>

  return (






    <>
      <BrowserRouter basename="/proyectoFinalReactMondinoDeLaRossa">
        <h2>TIENDA LA PIETÁ</h2>

        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Bienvenido a Tienda La Pietá" />} />

          <Route exact path="/bienvenida" element={<Bienvenida />} />
          
          <Route path="/item/:id" element={<ItemDetailConteiner />} />

          <Route exact path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>





    </>

  )
}

export default App
