 import NavBar from"./components/navbar/NavBar"
 import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
 import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
 import { BrowserRouter, Routes, Route } from "react-router-dom"
 
 import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Nuestros productos!:"/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestros productos!:"/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
