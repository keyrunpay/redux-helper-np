import React from 'react'
import './style.css'
import Counter from './Counter'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Users from './Users'
import CustomAction from './CustomAction'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Counter</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/custom'>Custom Action</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/' exact component={Counter}></Route>
          <Route path='/users' exact component={Users}></Route>
          <Route path='/custom' exact component={CustomAction}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
