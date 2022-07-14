import React, { useEffect, useState } from 'react'

import { getMessages } from '../services/message'
import { Message } from '../types/message'

function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        const getData = async () => {
            setMessages(await getMessages())

            // const messages = await getMessages()
            // console.log(messages)
        }
        
        getData()
        
    }, [])

  return (<>
    <div id= "album">

      { messages.map(message => <div className= "album" key={message._id}>
        
        { message.name }
        { message.user && <div> {message.user.username} </div>}
        </div>)}

    </div>
  </>)
}

export default MessagesPage