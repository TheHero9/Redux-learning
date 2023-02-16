import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'

import store from './main'

function App() {


  const counter = useSelector(state => state)
  const dispatch = useDispatch()

  const increment = () =>{
    return dispatch({type: 'increment'})
  }

  const decrement = () => {
    return dispatch({type: 'decrement'})
  }

  const square =() => {
    return dispatch ({type: 'square'})
  }




  return (
    <div className="App">
      
      <h1>Counter App</h1>
      <h4>{counter}</h4>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={square}>^</button>
    </div>
  )
}

export default App
