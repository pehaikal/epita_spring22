import React, { FC, ReactNode, useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth';
import { getMe } from '../services/auth';

const Default: FC<{children: ReactNode }> = ({children}) => {

    const context = useContext(AuthContext);
    let navigate = useNavigate();

    useEffect(() => {
        // console.log(context.isAuth);

        const getData = async () => {
           const res = await getMe();

            if (!context.isAuth == false && res == null) {
                // console.log('You are not logged in')
                context.updateAuth(false);
                navigate('/login')
            }
        }

        getData()
    }, [])

  return (<>
    <div id="nav">
        <Link to="/">Home</Link>
        <Link to="/album">Resources</Link>
        <Link to="/messages">Messages</Link>
        { !context.isAuth && <Link to="/register">Register</Link> }
        { !context.isAuth && <Link to="/login">Login</Link> }
        { context.isAuth && <Link to="/logout">Logout</Link> }
        {/* {auth.name} */}
    </div>

    
    <div className='container'>
        {children}
    </div>
  </>)
}

export default Default