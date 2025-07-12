import React, { useState } from 'react'

const ShoppingList = () => {

    const [shoppingList, setShoppingList] = useState([]);
    const [item, setItem] = useState({ "name": '', age: ''});
    // const {name, quantity} = shoppingList;

    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!item.name || !item.quantity) return;

        setShoppingList((prevShoppingList) => [...prevShoppingList, item]);
        setItem({ "name": '', quantity: '' });

    }

  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={shoppingList.name} placeholder='Item Name' onChange={handleChange} />
            <input type="number" name="quantity" value={shoppingList.quantity} placeholder='Quantity' onChange={handleChange} />
            <button type='submit'>Add Item</button>
        </form>

        <h1>Shopping List</h1>

        <ul>
            {
                shoppingList.map((item, index) => (

                    <li key={index}>
                        {item.name} - Quantity: {item.quantity}
                    </li>

                ))
            }

        </ul>

    </div>
  )
}

export default ShoppingList 