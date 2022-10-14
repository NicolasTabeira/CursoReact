import { useState } from 'react'
import {HStack, Button, Text} from '@chakra-ui/react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount (count - 1)

    console.log(initial, stock);


    return (
        <HStack>
            <Button colorScheme='red' onClick={decrease}>-</Button>
            <Text>{count}</Text>
            <Button colorScheme='red' onClick={increase}>+</Button>
            <Button colorScheme='red' onClick={ () => onAdd(count) }>Agregar al carrito</Button>
        </HStack>
    )


}

export {ItemCount}