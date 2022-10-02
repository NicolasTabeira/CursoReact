import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from './Components/Navbar'
import { ItemListContainer } from './Components/ItemListContainer'
import { ItemDetailContainer } from './Components/ItemDetailContainer'
import { Cart } from './Components/Cart'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Lista de productos"/>}/>
                    <Route path="/category/:category" element={<ItemListContainer greeting="Lista de productos"/>}/>
                    <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/cart"   element={<Cart/>}/>               
                </Routes>       
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;
