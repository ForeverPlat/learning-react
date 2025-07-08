import React from 'react'

const Product = ({ name, price }) => {

    return (
        <div>

            <h2>Name: { name }</h2>
            <p>Age: { price }</p>
            
        </div>
    )
}

export default Product