import { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { doc, getDoc, collection} from 'firebase/firestore'
import { Spinner } from '@chakra-ui/react'





const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const productCollection = collection(db, 'ListaDeProductos')
        const refDoc = doc(productCollection, id)
        getDoc(refDoc)
        .then((result) => {
            setProduct(
                {
                    id: result.id,
                    ...result.data(),
                }
            )
            setLoading(false)
        })
    }, [id])
    if (loading) {
        return 
        <Spinner color='red' />
    }
    return(
        <>
            <ItemDetail listProduct={product}/>
        </>
    )
}

export {ItemDetailContainer}