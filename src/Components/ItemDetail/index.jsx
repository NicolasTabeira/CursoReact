import { VStack, Text, Image, Flex, Box, Spacer, Button} from "@chakra-ui/react"
import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ItemCount } from '../ItemCount'



const ItemDetail = ({listProduct}) => {


    const [added, setAdded] = useState(false)

    const onAdd = () => {
        setAdded(true)
    }

    return(
        <VStack boxShadow= 'lg' p='6' rounded='md' bg='black' m="15px" minWidth="275px" color='white'>
            <Flex gap = '15' >
            <Box>
                <Image src={listProduct.image} alt={listProduct.product} w="200px"/>
            </Box>
            <Spacer/>
            <Box>
                <Text fontSize='35px' as='b'>{listProduct.product}</Text>
                <Text>{listProduct.description}</Text>
                <Text as='b' color='red'>${listProduct.price}</Text>
                <Text>Stock: {listProduct.stock}</Text>
                <Text as='u'>Consolas: </Text>
                <Text color='green'>{listProduct.config.consola}</Text>
                {
                    added ? 
                    <NavLink to="/cart">
                        <Button colorScheme='red' size='sm'>Ir al Carrito</Button>
                    </NavLink>
                    :
                    <ItemCount initial={1} stock={listProduct.stock} onAdd= {onAdd}/> 
                }
            </Box>
            </Flex>
        </VStack>
    )
}

export {ItemDetail}