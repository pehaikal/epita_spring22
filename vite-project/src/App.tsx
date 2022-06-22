import React, { useContext } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthContext } from './contexts'

const App = () =>{
    const age: number = 10;

    const auth  = useContext(AuthContext);

    return (<>
        {/* <div>App</div>
        <Greetings firstname="Pierre" lastname="Haikal" age={age} />
        <Animals /> */}
        
        <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/album">Ressources</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {auth.name}
        </div>

        <div className='container'>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/album" element={<ResourcesPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    </>)
}

export default App