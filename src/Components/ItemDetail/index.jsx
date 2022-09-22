import { VStack, Text, Image, Flex, Box, Spacer} from "@chakra-ui/react"


const ItemDetail = ({listProduct}) => {

    

    return(
        <VStack boxShadow= 'lg' p='6' rounded='md' bg='white' m="15px" minWidth="275px">
            <Flex gap = '15' >
            <Box>
                <Image src={listProduct.image} alt={listProduct.product} w="200px"/>
            </Box>
            <Box>
            <Text fontSize='35px' as='b'>{listProduct.product}</Text>
            <Spacer/>
            <Text>{listProduct.description}</Text>
            <Spacer/>
            <Text as='b' color='red'>${listProduct.price}</Text>
            <Spacer/>
            <Text>Stock: {listProduct.stock}</Text>
            <Spacer/>
            <Text as='u'>Consolas: </Text>
            <Spacer/>
            <Text color='green'>{listProduct.config.consola}</Text>
            </Box>
            </Flex>
        </VStack>
    )
}

export {ItemDetail}