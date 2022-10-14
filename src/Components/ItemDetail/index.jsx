import { VStack, Text, Image, Flex, Box, Spacer, Button} from "@chakra-ui/react"
import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ItemCount } from '../ItemCount'
import { useCartContext } from '../../context/CartContext'



const ItemDetail = ({listProduct}) => {

    const { image, product, price, stock, description, initial } = listProduct


    const [added, setAdded] = useState(false)
    const { addToCart } = useCartContext()

    const onAdd = (quantity) => {
        addToCart(listProduct, quantity)
        setAdded(true)
    }
    
    return(
        <VStack boxShadow= 'lg' p='6' rounded='md' bg='black' m="15px" minWidth="275px" color='white'>
            <Flex gap = '15' >
            <Box>
                <Image src={image} alt={product} w="200px"/>
            </Box>
            <Spacer/>
            <Box>
                <Text fontSize='35px' as='b'>{product}</Text>
                <Text>{description}</Text>
                <Text as='b' color='red'>${price}</Text>
                <Text>Stock: {stock}</Text>
                {
                    added ? 
                    <NavLink to="/cart">
                        <Button colorScheme='red' size='sm'>Ir al Carrito</Button>
                    </NavLink>
                    :
                    <ItemCount initial={initial} stock={stock} onAdd={onAdd}/> 
                }
            </Box>
            </Flex>
        </VStack>
    )
}

export {ItemDetail}