import React from 'react'
import Greetings from '../components/Greetings'
import Animals from '../components/Animals'

const HomePage = () => {
  const age: number = 10;
 
 return (<>
    <div>HomePage</div>

    <div>
    <Greetings firstname="Pierre" lastname="Haikal" age={age}/>
    <Animals />
    </div>
</>)
}

export default HomePage