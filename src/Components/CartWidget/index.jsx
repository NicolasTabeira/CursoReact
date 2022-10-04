import { GiShoppingCart } from "react-icons/gi"
import { Text } from '@chakra-ui/react' 
import { NavLink } from "react-router-dom"
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {totalQuantity} = useCartContext()

    return (
        <NavLink to="/cart">
            <GiShoppingCart/>
            <Text className="badge" fontSize='xs'>{totalQuantity()}</Text>
        </NavLink>
    )
}
export {CartWidget}