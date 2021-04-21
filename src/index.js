import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { BrowserRouter as Router } from 'react-router-dom'

import './_base.scss'
import store from './redux/store'

ReactDOM.render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>,

   document.getElementById('root')
)
