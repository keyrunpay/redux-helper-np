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
