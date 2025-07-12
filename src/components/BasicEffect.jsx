import React, { useEffect } from 'react'

const BasicEffect = () => {

    useEffect(() => {
        console.log("Basic Effect component created.")
    },[])


  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect