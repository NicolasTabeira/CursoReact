import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom"

const CartWidget = () => {
    return (
        <NavLink to="/cart">
            <GiShoppingCart/>
        </NavLink>
    )
}
export {CartWidget}