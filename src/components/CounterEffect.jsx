import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;
        console.log(count);
    }, [count])

  return (
    <div>
        <h1>{ count }</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default CounterEffect