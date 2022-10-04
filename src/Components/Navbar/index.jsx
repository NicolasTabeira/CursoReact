import {HStack, Spacer, Link, Text } from '@chakra-ui/react'
import logo from '../../Assets/logoDS.png'
import { CartWidget } from '../CartWidget'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <HStack style={{
            backgroundColor: 'black',
            padding: '5px',
            color: 'red',
            fontSize: '30px',
            textShadow: 'rgba(140, 140, 140, .7) -2px 1px'

        }} gap='10px'>
            <NavLink to="/">
            <img src={logo} alt="" width= "45%"/>
            </NavLink>   
            <Spacer/>
            <Text fontSize='50px' as='b' > Bienvenidos! </Text>
            <Spacer/>        
            <HStack>
                <NavLink to="category/juegos">
                    <Link>Juegos  </Link>
                </NavLink>
                
                <NavLink to="category/dlc">
                    <Link>DLC  </Link>
                </NavLink>
                <NavLink to="category/figuras">
                    <Link>Figuras  </Link>
                </NavLink>
                <CartWidget/>
            </HStack>
        </HStack>
    )
}
export {Navbar}