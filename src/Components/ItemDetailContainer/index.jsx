import { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { doc, getDoc, collection} from 'firebase/firestore'





const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()

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
        })
    }, [id])
    return(
        <>
            <ItemDetail listProduct={product}/>
        </>
    )
}

export {ItemDetailContainer}