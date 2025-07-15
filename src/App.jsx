import React from 'react'
import UserProfile from './components/UserProfile';
import UpdateUser from './components/UpdateUser';
import { UserProvider } from './UserContext';

const App = () => {

  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  )
}

export default App