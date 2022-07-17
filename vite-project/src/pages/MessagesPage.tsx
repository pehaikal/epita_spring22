import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getMessages } from '../services/message'
import { Message } from '../types/message'
import CreateMessage from '../components/CreateMessage'

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

      <CreateMessage />

      { messages.map(message => <div className= "album" key={ message._id }>
        
        { message.name }
        { message.user && <div> { message.user.username } </div>}

        <div> <Link to={ `/messages/${message._id}/update` }>Update</Link>  <Link to={ `/messages/${message._id}/delete` }>Delete</Link> </div>

        </div>)}
    </div>
  </>)
}

export default MessagesPage