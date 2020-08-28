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
