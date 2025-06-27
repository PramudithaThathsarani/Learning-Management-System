import { useState } from 'react'
import './footer.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* footer */}
        <div className="footer">
           <div className="fcols">
             <div className="fcon">
                <img src="/img/logo.png" alt="logo" style={{width: "150px"}}/>
                 <p>Sri Lanka Institute of Advanced Technological Education (SLIATE) <br/> Learning management system</p>
                </div>
            </div> 
            <div className="fcols">
                <div className="fcon">
                    <p style={{textAlign: "center"}}>Information:<br/><br/>
                        <a href="http://www.sliate.ac.lk/">SLIATE Web</a>
                    </p>
                    
                   </div>
            </div>  
            <div className="fcols">
                <div class="fcon" >
                    <p>Contact:</p>
                    <p>Address: 320, T B Jaya Mawatha , Colombo, Sri Lanka</p>
                    <p>Email: <a>lms@sliate.ac.lk</a></p>
                    <p>Phone: +94 11 2 123456</p>  
                   </div>
               </div>           
        </div>  
  
    </>
  )
}

export default Footer
