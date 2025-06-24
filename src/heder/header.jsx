import { useState } from 'react'
import '../heder/header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
     
 {/* <Header */}
     {/* subHeader */}
    <div class="lognav">
         <img src="public/img/sltate_cover.jpg" alt="Logo" style={{width: '250px' , margin: '10px'}}/>
    </div>
    {/* mainHeader */}
    <div class="header">
        <img src="public/img/logo3.jpg" alt="Logo" style={{width: '80px',}}/>
        
        <h1>SLIATE LMS</h1>
        <h2>"Education is the key to unlocking the golden door of freedom."</h2>   
    </div>
        
{/* Navigation Bar
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Course</a>
        <a href="#" style="float: right;">Login</a>
    </div> */}
 
            
    </>
  )
}

export default Header 
