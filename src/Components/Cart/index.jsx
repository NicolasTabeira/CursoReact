import { VStack, Center, Text, Image, HStack, Button} from '@chakra-ui/react'
import { useCartContext } from '../../context/CartContext'
import { User } from '../Form'


const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()
    
    
    return(
        <Center>
            <HStack >
            <VStack style={{margin: '5px'}}>
                {cartList.map( product =>
                    <HStack key={product.id} boxShadow='lg' p='6' rounded='md' spacing={5} bg="black" color="white" minWidth={450}>
                        <Image src={product.image} w="150px"></Image>
                        <VStack>
                            <Text as="b">{product.product}</Text>
                            <Text as="b">Cantidad: {product.quantity}</Text>
                            <Text as="b">Sub Precio: $ {(product.price * product.quantity)}</Text>
                        </VStack>
                        <Button colorScheme='red' size='sm' onClick={() => removeProduct(product.id) }>X</Button>
                    </HStack>
                )}
                {cartList.length === 0 ?
                    <Text as="b" color="red" fontSize='xxx-large'>No hay productuctos.</Text>
                    :
                    <>
                    <Text as="b" color="red" fontSize='xxx-large'>Total: ${totalPrice()}</Text>
                    <Button colorScheme='red' size='sm' onClick={cleanCart}>Vaciar carrito</Button>
                    </>
                }
            </VStack>
                {cartList.length === 0 ?
                    <>
                    </>
                    :
                    <User/>
                }
            </HStack>
            
        </Center>
        
    )
}



export {Cart}