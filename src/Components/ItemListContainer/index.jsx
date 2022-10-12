import { ItemList } from '../ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {

    const [listProduct, setListProduct] = useState ([])

    const {category} = useParams()

    useEffect (() => {
        let productsCollection = collection(db, 'ListaDeProductos')
        if (category) {
            productsCollection = query(productsCollection, where('category', '==', category))
        }
        getDocs(productsCollection)
        .then((data) => {
            const lista = data.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setListProduct(lista)
        })
    }, [category])

    return (
        <>
            <div style={{

                backgroundColor:'grey',
                textAlign: 'center',
                fontSize: '30px',
                color: 'red',
                textShadow: 'rgba(0, 0, 0, .7) -2px 1px'
                
                }}>{greeting}</div>
            {
            <ItemList listProduct={listProduct}/>

            }
        </>
    )
}
export {ItemListContainer}