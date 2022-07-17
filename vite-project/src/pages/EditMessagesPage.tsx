import { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { editMessageParams } from '../types/message'
import { getMessage, updateMessage } from '../services/message'

const EditMessagesPage = () => {
  const { messageId } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState<editMessageParams>({
    _id: '',
    name: ''
  })

  useEffect(() => {
    const getData = async() => {
      const response = await getMessage(messageId)
      
      if (typeof response == "object") {
        setForm({
          _id: response._id,
          name: response.name
        })
      }
    }

    getData()
  }, [])

  const onSubmitHandler = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await updateMessage(form)
    navigate('/messages')
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string, value: string } = event.target 
    setForm({ ...form, [name]: value })
  }

  return (<form onSubmit={ onSubmitHandler }>
      <div>Edit the message</div>

      <div className="form-row">
          <label>Modify your Message Name</label>
          <input 
              type="text"
              name="name"
              value={ form.name }
              onChange={ onChangeHandler }
          />
      </div>

      <div className="form-row">
          <button type='submit'>Confirm</button>
      </div>
    </form>)
}

export default EditMessagesPage