import { VStack, Button, Text, Image, Link } from "@chakra-ui/react"


const Item = ( {product}) => {
    return (
        <VStack boxShadow= 'lg' p='6' rounded='md' bg='white' m="15px" minWidth="275px">
            <Image src={product.image} alt={product.product} w="100px"/>
            <Text>{product.product}</Text>
            <Text>${product.price}</Text>
            <Button colorScheme='red' size='xs'>
                <Link>Ver Mas</Link>
            </Button>
        </VStack>

    )
}

export {Item}