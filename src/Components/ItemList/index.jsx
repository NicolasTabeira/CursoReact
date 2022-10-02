import { Grid } from '@chakra-ui/react'
import { Item } from '../Item'



const ItemList = ({listProduct}) => {

    console.log(listProduct)

    return (
        <div style = {{
            backgroundColor: 'grey'
        }}>
            <Grid templateColumns= 'repeat(3, 1fr)' gap={10} justifyItems='center' >
                {listProduct.map(product => <Item key={product.id} product= {product}/>)}
            </Grid>
        </div>
    )
}

export {ItemList}