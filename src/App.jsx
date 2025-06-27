import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react'
import './index.css'
import Home from './frontend/user/home/home';
import Course from './frontend/user/course/course';
import Login from './frontend/user/login/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        
        <nav className='nav'>
          <Link to="/">Home</Link>
          <Link to="/course">Course</Link>
          <Link to="/login">Login</Link>
        </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/> 
        <Route path="/login" element={<div className="login"><Login /></div>} />

      </Routes>
      
    </Router>
            
    </>
  )
}

export default App
