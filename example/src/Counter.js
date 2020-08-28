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
