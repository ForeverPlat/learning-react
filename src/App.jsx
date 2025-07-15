import React from 'react'
import { useReducer } from 'react'

const initialState = {count: 0};

//  state: what we update,  action: how we are updating it
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, count: state.count + 1};
    case "decrement":
      return {...state, count: state.count - 1};
    case "reset":
      return {...state, count: 0}
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>
    <h1>Count: { state.count }</h1>
    <button onClick={() => dispatch({ "type": "increment" })}>+</button>
    <button onClick={() => dispatch({ "type": "decrement" })}>-</button>
    <button onClick={() => dispatch({ "type": "reset" })}>Reset</button>
  </div>
}

export default App