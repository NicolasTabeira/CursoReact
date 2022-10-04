import { VStack, Center, Text, Image, HStack, Button} from '@chakra-ui/react'
import { useCartContext } from '../../context/CartContext'


const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()

    return(
        <Center>
                <VStack style={{margin: '5px'}}>
                    {cartList.map( prod =>
                        <HStack key={prod.id} boxShadow='lg' p='6' rounded='md' spacing={10} bg="black" color="white">
                            <Image src={prod.image} w="150px"></Image>
                            <VStack>
                                <Text as="b">{prod.product}</Text>
                                <Text as="b">Cantidad: {prod.quantity}</Text>
                                <Text as="b">Sub Precio: $ {(prod.price * prod.quantity)}</Text>
                            </VStack>
                            <Button colorScheme='red' size='sm' onClick={() => removeProduct(prod.id) }>X</Button>
                        </HStack>
                    )}
                    {cartList.length === 0 ?
                        <Text as="b" color="red" fontSize='xxx-large'>No hay productos.</Text>
                        :
                        <>
                        <Text as="b" color="red" fontSize='xxx-large'>Total: ${totalPrice()}</Text>
                        <Button colorScheme='red' size='sm' onClick={cleanCart}>Vaciar carrito</Button>
                        </>
                    }
                </VStack>
        </Center>
    )
}

export {Cart}