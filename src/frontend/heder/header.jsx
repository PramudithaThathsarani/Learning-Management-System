import { useState } from 'react'
import './header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
     
 {/* <Header */}
     {/* subHeader */}
    <div className="lognav">
         <img src="/img/sltate_cover.jpg" alt="Logo" style={{width: '250px' , margin: '10px'}}/>
    </div>
    {/* mainHeader */}
    <div className="header">
        <img src="/img/logo3.jpg" alt="Logo" style={{width: '80px',}}/>
        
        <h1>SLIATE LMS</h1>
        <h2>"Education is the key to unlocking the golden door of freedom."</h2>   
    </div>
        

    
 
            
    </>
  )
}

export default Header 
