import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'


import store from './store' 


const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState())
})

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: "Bug1",
  }
})

unsubscribe()

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1
  }
})

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>

)
