import {ChangeEvent, FormEvent, useState} from 'react'
import { useNavigate, Link} from 'react-router-dom'

import { registerParams } from '../types/auth'
import { register } from '../services/auth'

function RegisterPage() {

    let navigate = useNavigate()
    
    const [form, setForm] = useState <registerParams>({
        username:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value}: {name: string, value: string}= event.target
        setForm({...form, [event.target.name]: event.target.value})
    }

    const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(await register(form)) {
            navigate('/login')
        }
        // console.log(form)
    }
    
    return (<>
    <form onSubmit={onSubmitHandler}>
            
    <h1>Register your Account</h1>

        <div className='form-row'>
            <label>Username</label>
            <input 
            type="text" 
            name="username" 
            value={form.username} 
            onChange={onChangeHandler}
            />
        </div>

        <div className='form-row'>
            <label>Email</label>
            <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={onChangeHandler}
            />
        </div>

        <div className='form-row'>
            <label>Password</label>
            <input 
            type="password" 
            name="password" 
            value={form.password} 
            onChange={onChangeHandler}
            />
        </div>

        <div className='form-row'>
            <button type="submit">Register</button>
        </div>

        <div className="form-row">
            <Link to="/login">Already have an account !</Link>
        </div>
    </form>
    </>)
}

export default RegisterPage