import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar } from './Components/Navbar'
import { ItemListContainer } from './Components/ItemListContainer'

function App() {
    return (
        <ChakraProvider>
            <Navbar/>
            <ItemListContainer greeting="Pero las antiguas leyendas dicen que un día un no muerto será elegido para abandonar el Refugio de los no muertos, en peregrinación a la tierra de los antiguos dioses, Lordran."/>
        </ChakraProvider>
    )
}

export default App;
