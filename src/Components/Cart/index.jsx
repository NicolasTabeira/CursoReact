import { VStack, Center, Text, Image, HStack, Button} from '@chakra-ui/react'
import { useCartContext } from '../../context/CartContext'
import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()

    const comprador = {
        nombre: "juan",
        apellido: "costa",
        email: "juancosta@gmail.com"
    }

    const finalizarCompra = () => {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            comprador: comprador,
            items: cartList,
            date: serverTimestamp(),
            total: totalPrice(),

        })
        .then(result=>{
            console.log(result.id)
            cleanCart()
        })
    }

    return(
        <Center>
            <VStack style={{margin: '5px'}}>
                {cartList.map( product =>
                    <HStack key={product.id} boxShadow='lg' p='6' rounded='md' spacing={10} bg="black" color="white">
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
                    <Button colorScheme='red' size='sm' onClick={finalizarCompra}>Finalizar compra</Button>
                    </>
                }
            </VStack>
        </Center>
        
    )
}



export {Cart}