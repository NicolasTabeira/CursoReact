import {HStack, Spacer} from '@chakra-ui/react'
import logo from '../../Assets/logoDS.png'
import { Link } from '@chakra-ui/react'

const Navbar = () => {
    return(
        <HStack>
            <img src={logo} alt="" width= "5%"/>
            <Spacer/>
            <HStack>
                <Link>Juegos</Link>
                <Link>DLC</Link>
                <Link>Figuras</Link>
            </HStack>
        </HStack>
    )
}
export {Navbar}