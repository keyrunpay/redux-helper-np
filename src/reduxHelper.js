const actionTypes = {
  CHANGE_STATE: 'CHANGE_STATE',
  CUSTOM_ACTION: 'CUSTOM_ACTION'
}

const initState = {
  status: 'idle',
  data: null
}

export const updateState = (reducer_name, payload) => {
  return {
    type: reducer_name.toUpperCase() + actionTypes.CHANGE_STATE,
    payload
  }
}

export const customAction = (reducer_name, customStateUpdatingFunction) => {
  return {
    type: reducer_name.toUpperCase() + actionTypes.CUSTOM_ACTION,
    payload: customStateUpdatingFunction
  }
}

export const fetchFromApi = (dispatch, reducer_name, axiosReqInstance) => {
  return new Promise(async (resolve, reject) => {
    dispatch(updateState(reducer_name, { status: 'loading', data: 'null' }))
    try {
      const { data } = await axiosReqInstance()
      dispatch(updateState(reducer_name, { status: 'data', data }))
      resolve(data)
    } catch (err) {
      if (err && err.response && err.response.data) {
        dispatch(
          updateState(reducer_name, {
            status: 'error',
            data: err.response.data
          })
        )
        reject(err.response.data)
      } else {
        const dt = {
          status: 0,
          message: 'Looks like there is no internet access'
        }
        dispatch(updateState(reducer_name, { status: 'error', data: dt }))
        reject(dt)
      }
    }
  })
}

const makeReducer = (reducer_name, initialState = initState) => {
  return (state = initialState, { type, payload }) => {
    switch (type) {
      case reducer_name.toUpperCase() + actionTypes.CHANGE_STATE:
        return { ...state, ...payload }
      case reducer_name.toUpperCase() + actionTypes.CUSTOM_ACTION:
        return payload(state)
      default:
        return state
    }
  }
}

export default makeReducer
