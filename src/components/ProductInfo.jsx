import React from 'react'

const ProductInfo = () => {

    const product = {
        name: 'Laptop',
        price: 1200,
        availability: 'In stock'
    };

  return (
    <div>

       <p>Name: { product.name }</p> 
       <p>Price: { product.price }</p> 
       <p>Availability: { product.availability }</p> 

    </div>
  )
}

export default ProductInfo