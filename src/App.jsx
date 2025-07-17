import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed';
import './styles/style.css'
import './styles/post.css'

const App = () => {
  return (
    <div className='main-layout'>
      <Sidebar />
      <Feed />
    </div>
  )
}

export default App