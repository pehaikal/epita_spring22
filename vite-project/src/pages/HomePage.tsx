import React, {useContext} from 'react'
import Greetings from '../components/Greetings'
import Animals from '../components/Animals'

import {AuthContext} from '../contexts'

const HomePage = () => {
  const age: number = 10;
  const auth  = useContext(AuthContext);

  return (<>
    <div>Welcome {auth.name}</div>

    {/* <div>
      <Greetings firstname="Pierre" lastname="Haikal" age={age}/>
      <Animals />
    </div> */}
</>)
}

export default HomePage