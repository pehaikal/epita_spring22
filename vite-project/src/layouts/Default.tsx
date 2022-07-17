import React, { FC, ReactNode, useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../contexts/Auth'
import { getMe, logout } from '../services/auth'


const Default: FC<{children: ReactNode }> = ({children}) => {

    const context = useContext(AuthContext);
    let navigate = useNavigate();

    useEffect(() => {
        // console.log(context.isAuth);
        
        const getData = async () => {
            const res = await getMe()
            
            if (res.status === false || context.isAuth === false) {
                context.updateAuth(false)
                navigate('/login', { replace: true })
            } else {
                context.updateAuth(true)
            }
        }

        getData()
    }, [])

    const onClickHandler = async () => {
        await logout()
        context.updateAuth(false)
        navigate('/login')
      }

  return (<>
    <div id="nav">
        <Link to="/">Home</Link>
        <Link to="/album">Resources</Link>
        <Link to="/messages">Messages</Link>
        { !context.isAuth && <Link to="/register">Register</Link> }
        { !context.isAuth && <Link to="/login">Login</Link> }
        { context.isAuth && <button onClick={ onClickHandler }>Logout</button> }
        {/* {auth.name} */}
    </div>

    <div className='container'>
        {children}
    </div>
  </>)
}

export default Default