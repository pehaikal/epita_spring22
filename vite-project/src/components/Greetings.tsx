import React from 'react'

// export default Greetings;
type GreetingsParams = { 
    firstname: String, 
    lastname: String,
    age ?: number // ? means optional
}

// export default function Greetings(props: GreetingsParams) {
function Greetings({ firstname, lastname, age=5}: GreetingsParams) {
  return (
    <div>Hello {firstname} {lastname} {age+10}!</div>
  )
}

export default Greetings