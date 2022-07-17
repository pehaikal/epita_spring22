import React, { useContext } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Default from './layouts/Default';
import Auth from './layouts/Auth';

import MessagesPage from './pages/MessagesPage';
import DeleteMessagesPage from './pages/DeleteMessagesPage';
import EditMessagesPage from './pages/EditMessagesPage';

const App = () =>{
    const age: number = 10;

    return (<>
        {/* <div>App</div>
        <Greetings firstname="Pierre" lastname="Haikal" age={age} />
        <Animals /> */}
        
        <Routes>
            <Route path="/" element={ <Default><HomePage /></Default> } />
            <Route path="/album" element={ <Default><ResourcesPage /></Default> } />
            <Route path="/messages" element={ <Default><MessagesPage /></Default> } />
            <Route path="/messages/:messageId/update" element={ <Default><EditMessagesPage /></Default> } />
            <Route path="/messages/:messageId/delete" element={ <Default><DeleteMessagesPage /></Default> } />
            <Route path="/register" element={ <Auth> <RegisterPage /> </Auth> } />
            <Route path="/login" element={ <Auth> <LoginPage /> </Auth> } />
        </Routes>
    </>);
}

export default App