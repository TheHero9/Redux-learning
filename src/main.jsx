import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'

import {createStore} from 'redux'

const reducer = (state = 0, action) => {

  switch(action.type){
    case 'increment':
      return state += 1
      break;
    case 'decrement':
      return state -= 1
      break;
    case 'square':
      return state = state**2
      break;
    default: 
      return state


  }

}

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>

)


export default store