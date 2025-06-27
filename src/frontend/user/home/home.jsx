import { useState } from 'react'
import './home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* Main Content */}
     <div class="con">
        <h1>Sri Lanka Institute of Advanced Technological Education <br/>(SLIATE)</h1>
        <h2>Learning Management System</h2>
     </div><br/>
{/* course categories */}
     <div class="categories">
        <h2>Courses</h2>

        <div class="course">
            <div class="content">
                <a href="../coursescat/hndit/it.html">
                <p>Higher National Diploma In Information Technology <br/>(HNDIT)</p>
                 </a>
            </div>
        </div>
          <div class="course">
            <div class="content">
                <a href="../coursescat/hnda/hnda.html">
                <p>Higher National Diploma in Accountancy<br/>(HNDA)<br/><br/> </p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndagri/hndagri.html">
                <p>Higher National Diploma in Technology (Agriculture)<br/>(HNDAgri)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndft/hndft.html">
                <p>Higher National Diploma In Food Technology <br/>(HNDFT) </p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndbf/hndbf.html">
                <p>Higher National Diploma in Business Finance <br/>(HNDBF) </p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndba/hndba.html">
                <p>Higher National Diploma in Business Administration <br/>(HNDBA)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndbse/hndbse.html">
                <p>Higher National Diploma in Engineering- (Building Services) <br/>(HNDBSE)<br/></p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndenglish/hndenglish.html">
                <p>Higher National Diploma in Engineering (Civil)<br/>(HNDCE)<br/></p>
                </a>
             </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hnden/hnden.html">
                <p>Higher National Diploma in Engineering (Electrical)<br/>(HNDEN)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndenglish/hndenglish.html">
                <p>Higher National Diploma in English<br/>(HNDEnglish)</p>
                </a>
            </div>
        </div>
       
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndthm/hndthm.html">
                <p>Higher National Diploma in Tourism and Hospitality Management (HNDTHM) </p>
                </a>
            </div>
        </div>
       
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndm/hndm.html">
                <p>Higher National Diploma in Management<br/>(HNDM)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndma/hndma.html">
                <p>Higher National Diploma in Engineering (Mechanical)<br/>(HNDMA)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndmg/hndmg.html">
                <p>Higher National Diploma in Project Management<br/>(HNDMG)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndqs/hndqs.html">
                <p>Higher National Diploma in Quantity Survey <br/>(HNDQS)</p>
                </a>
            </div>
        </div>
     </div>

    
 
            
    </>
  )
}

export default Home
