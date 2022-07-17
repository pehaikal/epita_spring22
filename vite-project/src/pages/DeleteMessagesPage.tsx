import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { deleteMessage } from '../services/message'

const DeleteMessagesPage = () => {
  let {messageId} = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const deleteMsg = async () => {
      await deleteMessage(messageId)
      navigate('/messages')
    }

    deleteMsg()
  }, [])

  return (
    <div>DeleteMessagesPage</div>
  )
}

export default DeleteMessagesPage