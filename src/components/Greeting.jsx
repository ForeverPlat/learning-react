import React from 'react'

const Greeting = () => {

    const msg = 'Welcome';
    const date = new Date();

  return (
    <div>

        <h1>{ msg }</h1>
        <p>The date is: { date.getDate() }</p>

    </div>
  )
}

export default Greeting