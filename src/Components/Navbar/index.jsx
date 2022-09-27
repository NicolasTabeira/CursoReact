import {HStack, Spacer, Link } from '@chakra-ui/react'
import logo from '../../Assets/logoDS.png'
import { CartWidget } from '../CartWidget'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <HStack>
            <NavLink to="/">
            <img src={logo} alt="" width= "5%"/>
            </NavLink>            
            <Spacer/>
            <HStack>
                <NavLink to="category/juegos">
                    <Link>Juegos</Link>
                </NavLink>
                <NavLink to="category/dlc">
                    <Link>DLC</Link>
                </NavLink>
                <NavLink to="category/figuras">
                    <Link>Figuras</Link>
                </NavLink>
                <CartWidget/>
            </HStack>
        </HStack>
    )
}
export {Navbar}