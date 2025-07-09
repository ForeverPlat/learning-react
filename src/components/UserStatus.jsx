import React from 'react'

const UserStatus = ({ loggedIn, isAdmin }) => {

    if (loggedIn && isAdmin) {
        return <h2>Welcome Admin</h2>
    }
    if (loggedIn) {
        return <h2>Welcome User</h2>
    }


    return (
        <div></div>
    )
}

export default UserStatus