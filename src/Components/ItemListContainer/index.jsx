import { Text } from '@chakra-ui/react'
import { ItemList } from '../ItemList'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const [listProduct, setListProduct] = useState ([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams()

    useEffect (() => {
        setLoading(true)
        customFetch(products)
            .then(res => { 
                if (category) {
                    setLoading(false)
                    setListProduct(res.filter(prod => prod.category === category))
                } else {
                    setLoading(false)
                    setListProduct(res)
                }                
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
            {!loading
            ?
            <ItemList listProduct={listProduct}/>
            :
            <Text>Cargando...</Text>

            }
        </>
    )
}
export {ItemListContainer}