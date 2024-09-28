import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './App/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // after writing provider give the values
  // values are called as store
  <Provider store={store}>
    <App />
  </Provider>,

  
// In Redux, the Provider is a component provided by the react-redux library. It serves as a bridge between the Redux store and the React application, allowing React components to access the Redux store's state and dispatch actions.

// Here's how the Provider component is typically used:

// process ----------

// Setup: At the top level of your React application, you wrap your entire application component tree with the Provider component.

// Props: The Provider component receives a prop called store, which is the Redux store that you've created using the createStore function.

// Usage: By wrapping your component tree with the Provider, you make the Redux store accessible to all components in the application without having to manually pass it down through props.
 
)


