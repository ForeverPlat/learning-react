import React from 'react'
import { createContext } from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

export const Data = createContext();
export const Data1 = createContext();

const App = () => {

  const name = 'Luqman';
  const age = 18;

  return (
    <div>

      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>  

    </div>
  )
}

export default App