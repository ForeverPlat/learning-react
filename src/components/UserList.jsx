import React from 'react'

const UserList = () => {

    const users = [
        {id: 1, name: "Alice", age: 25},
        {id: 2, name: "Bob", age: 30},
        {id: 3, name: "Charlie", age: 22},
    ]
    
    return (
        <div>

            { users.map(({ id, name, age }) => (
                <div key={ id }>
                    <h2>Name: { name }</h2>
                    <h2>Name: { age }</h2>
                </div>
            )) }

        </div>
    )
}

export default UserList