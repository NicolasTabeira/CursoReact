import { FormControl, FormLabel, FormErrorMessage,  Input, Button, Spacer} from '@chakra-ui/react'
import { useCartContext } from '../../context/CartContext'
import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react' 
import swal from 'sweetalert2'


const User = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')

    const { cartList, totalPrice, cleanCart } = useCartContext()

    


    const finalizarCompra = () => {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            comprador: {
                nombre: name,
                apellido: lastName,
                email: email
            },
            items: cartList,
            date: serverTimestamp(),
            total: totalPrice(),

        })
        .then(result=>{
            swal.fire({
                title: "Compra realizada",
                text: `ID de tu compra: ${result.id}`,
                icon: "success",
                button: "ok",
            })
            cleanCart()
        })
    }



    
        const isError = name === '' || lastName === '' || email === '' || emailConfirm === '' || email !== emailConfirm ||  !email.includes('@') || !email.includes('.')
    
        return (
            <FormControl isInvalid={isError}>
                <FormLabel>Nombre</FormLabel>
                <Input type='name' value={name} onChange={(e) => {setName(e.target.value)}} />
                <FormLabel>Apellido</FormLabel>
                <Input type='name' value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
                <FormLabel>Email</FormLabel>
                <Input type='email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <FormLabel>Confirmar Email</FormLabel>
                <Input type='email' value={emailConfirm} onChange={(e) => {setEmailConfirm(e.target.value)}} />
                <Spacer/>
                
            {!isError ? (
                <Button colorScheme='red' size='sm' onClick={finalizarCompra}>Finalizar compra</Button>
            ) : (
                <FormErrorMessage color='black'>Asegurate de ingresar todos los datos.Los Email deben coincidir.</FormErrorMessage>

            )}
            </FormControl>
        )
    }


export {User}