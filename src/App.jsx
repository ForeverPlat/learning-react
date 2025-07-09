import React from 'react'
import Weather from './components/Weather';
import UserStatus from './components/UserStatus';
import Greeting from './components/Greeting';

const App = () => {

  return <div>


    {/* <Weather temperature={16}/> */}

    {/* <UserStatus loggedIn={true} isAdmin={true} /> */}

    <Greeting timeOfDay="morning" />
  </div>
  

}

export default App;