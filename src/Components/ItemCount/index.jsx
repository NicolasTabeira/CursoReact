import { useState } from 'react'
import {HStack, Button, Text} from '@chakra-ui/react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount (count - 1)

    return (
        <HStack>
            <Button onClick={decrease}>-</Button>
            <Text>{count}</Text>
            <Button onClick={increase}>+</Button>
            <Button>Agregar al carrito</Button>
        </HStack>
    )


}

export {ItemCount}