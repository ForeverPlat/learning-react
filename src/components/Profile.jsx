import React, { useState } from 'react'

const Profile = () => {

    const [profile, setProfile] = useState({'name': '', age: ''});
    const {name, age} = profile;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }))
    }


  return (
    <div>
    
        <label>
            Name:
            <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
            Age:
            <input type="number" name="age" value={age} onChange={handleChange} />
        </label>

        <h1>Profile</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>



    </div>
  )
}

export default Profile