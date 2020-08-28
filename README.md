# redux-helper-np

> Made by Kiran Neupane #Buggged

[![NPM](https://img.shields.io/npm/v/redux-helper-np.svg)](https://www.npmjs.com/package/redux-helper-np) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save redux-helper-np
```

## Usage

### Creating Store

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers } from 'redux'
import { makeReducer } from 'redux-helper-np'
import { Provider } from 'react-redux'

const allReducer = combineReducers({
  counter: makeReducer('counter', { count: 0 }),
  users: makeReducer('users'),
  custom: makeReducer('custom', { text: 'Initial unchanged text' })
})

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### Consuming & Mutating Counter State

```jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateState } from 'redux-helper-np'

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <p>Count is: {count}</p>
      <br />
      <button
        onClick={() => dispatch(updateState('counter', { count: count + 1 }))}
      >
        Increse
      </button>
      <br />
      <br />
      <button
        onClick={() => dispatch(updateState('counter', { count: count - 1 }))}
      >
        Decrease
      </button>
    </div>
  )
}

export default Counter
```

### Consuming & Mutating User Api State

```jsx
import React from 'react'
import Axios from 'axios'
import { fetchFromApi } from 'redux-helper-np'
import { useDispatch, useSelector } from 'react-redux'

function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  const fetchUser = () => {
    return Axios.get('https://jsonplaceholder.typicode.com/users')
  }

  React.useEffect(() => {
    fetchFromApi(dispatch, 'users', fetchUser)
      .then(console.log)
      .catch(console.error)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {users.status === 'loading' && <p>Loading....</p>}
      {users.status === 'data' && <p>{JSON.stringify(users.data)}</p>}
      {users.status === 'error' && (
        <p style={{ color: 'red' }}>{JSON.stringify(users.data)}</p>
      )}
    </div>
  )
}

export default Users
```

### Consuming & Mutating User Custom Action State

```jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { customAction } from 'redux-helper-np'

let count = 0
function CustomAction() {
  const custom = useSelector((state) => state.custom)
  const dispatch = useDispatch()

  const setCustomData = (state) => {
    count++
    return {
      ...state,
      text: 'this text is from custom action component ' + count
    }
  }

  return (
    <div>
      <p>Custom text is: {custom.text}</p>
      <br />
      <button onClick={() => dispatch(customAction('custom', setCustomData))}>
        Change Text
      </button>
    </div>
  )
}

export default CustomAction
```

## Information

The package helps to minimize the code while creating redux, it completely remove need of reducers and action

## About Author

<a href="https://github.com/keyrunpay"><img src="https://avatars0.githubusercontent.com/u/41059790?s=460&u=fceee26bdb0e5dd6b3b57120fa7295ddcd82d878&v=4" title="keyrunpay" width="60" height="60"></a>

Kiran Neupane <br />
tokeyrun@gmail.com <br />
[Facebook](https://facebook.com/kiran.neupz)

## Support This Package

<a href="https://www.buymeacoffee.com/kirann"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" title="Buy me a coffee"  height="50"></a>

### React Tutor @ Youtube

Channel Name: Buggged <br/>
[Youtube](https://www.youtube.com/channel/UChvdEZeMyLPhZ0Jt_K3RCyQ) <br/>
[Website](https://buggged.com)

## License

MIT © [keyrunpay](https://github.com/keyrunpay)
