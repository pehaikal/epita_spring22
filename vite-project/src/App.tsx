import React, { useContext } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MessagesPage from './pages/MessagesPage';
import Default from './layouts/Default';
import Auth from './layouts/Auth';

import { AuthContext } from './contexts'

const App = () =>{
    const age: number = 10;

    const auth  = useContext(AuthContext);

    return (<>
        {/* <div>App</div>
        <Greetings firstname="Pierre" lastname="Haikal" age={age} />
        <Animals /> */}
        
        <Routes>
            <Route path="/" element={<Default><HomePage /></Default>} />
            <Route path="/album" element={<Default><ResourcesPage /></Default>} />
            <Route path="/messages" element={<Default><MessagesPage /></Default>} />
            <Route path="/register" element={<Auth><RegisterPage /></Auth>} />
            <Route path="/login" element={<Auth><LoginPage /></Auth>} />
        </Routes>
    </>);
}

export default App