import React, { useContext } from 'react'
import Greetings from '../components/Greetings'
import Animals from '../components/Animals'

import { AuthContext } from '../contexts/Auth'

const HomePage = () => {
  const age: number = 10;
  const auth  = useContext(AuthContext);

  return (<>
  <h1>Homepage</h1>

  <div>Welcome Pierre</div>

    {/* <div>
      <Greetings firstname="Pierre" lastname="Haikal" age={ age }/>
      <Animals />
    </div> */}
</>)
}

export default HomePage