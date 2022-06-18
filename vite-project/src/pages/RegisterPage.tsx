import React, {useState} from 'react'


function RegisterPage() {
    const [form, setForm] = useState({
        username:"",
        email:""
    })

    const onChangeHandler = (event: any) => {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event: any) => {
        event.preventDefault()
        console.log(form)
    }
    
    return (<>
        <div>RegisterPage</div>
        <form onSubmit={onSubmitHandler}>
            <label>Username</label>

            <input 
            type="text" 
            name="username" 
            value={form.username} 
            onChange={onChangeHandler}
            />
            
            <label>Email</label>
            <input 
            type="text" 
            name="email" 
            value={form.email} 
            onChange={onChangeHandler}
            />

            <button type="submit">Submit</button>
        </form>
    </>)
}

export default RegisterPage