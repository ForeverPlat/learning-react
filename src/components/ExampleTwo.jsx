import React, { useState } from 'react'

const ExampleTwo = () => {

    const [randomNum, setRandomNum] = useState(() => Math.floor(Math.random() * 100));

    const genNum = () => {
        const newNum = Math.floor(Math.random() * 100);
        setRandomNum(newNum);
    }

  return (
    <div>
        <h1>Random Number: { randomNum }</h1>
        <button onClick={genNum}>Generate New Number</button>

    </div>
  )
}

export default ExampleTwo