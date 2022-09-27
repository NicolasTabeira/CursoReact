import { VStack, Text, Image, Flex, Box, Spacer} from "@chakra-ui/react"
import { ItemCount } from '../ItemCount'


const ItemDetail = ({listProduct}) => {

    

    return(
        <VStack boxShadow= 'lg' p='6' rounded='md' bg='white' m="15px" minWidth="275px">
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
                <ItemCount initial={1} stock={listProduct.stock} onAdd= {() => {}}/> 
            </Box>
            </Flex>
        </VStack>
    )
}

export {ItemDetail}