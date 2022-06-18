import { Route, Routes, Link } from 'react-router-dom'
import ResourcesPage from './pages/ResourcesPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

const App = () =>{
    const age: number = 10;

  return (<>
    {/* <div>App</div>
    <Greetings firstname="Pierre" lastname="Haikal" age={age} />
    <Animals /> */}

    <div id="nav">
                <Link to="/">Home</Link>
                <Link to="/album">Ressources</Link>
                <Link to="/register">Register</Link>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/album" element={<ResourcesPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
    </>)
}

export default App