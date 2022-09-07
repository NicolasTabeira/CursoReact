import {HStack, Spacer, Link } from '@chakra-ui/react'
import logo from '../../Assets/logoDS.png'
import { CartWidget } from '../CartWidget'

const Navbar = () => {
    return(
        <HStack>
            <img src={logo} alt="" width= "5%"/>
            <Spacer/>
            <HStack>
                <Link>Juegos</Link>
                <Link>DLC</Link>
                <Link>Figuras</Link>
                <CartWidget/>
            </HStack>
        </HStack>
    )
}
export {Navbar}