import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import UnderDevelopment from './views/under-development'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={UnderDevelopment} exact path="/under-development" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))