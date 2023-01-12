import React from 'react'
import products from '../products.json'

const ProductList = (): JSX.Element => {
    console.log(products)
  return (
    <div>
    {products.map((product) => {
        return (<>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            </>
        )
    })}
    </div>
  )
}

export default ProductList