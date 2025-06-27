import { useState } from 'react'
import './course.css'


function Course() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Main Content */}
     <div className="con">
        <h1>Sri Lanka Institute of Advanced Technological Education <br/>(SLIATE)</h1>
        <h2>Learning Management System</h2>
     </div>
    
    {/* course categories  */}
     <div className="categories">
        <h2>Course Categories</h2>

        <div className="course">
            <div className="content">
                <a href="../coursescat/hndit">
                <img src="/img/it.jpeg" />
                <p>Higher National Diploma In Information Technology <br/>(HNDIT)</p>
                 </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hnda/hnda.html">
                <img src="../img/acc.jpeg" />
                <p>Higher National Diploma in Accountancy<br/>(HNDA)<br/><br/></p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndagri/hndagri.html">
                <img src="/img/agri.jpg" />
                <p>Higher National Diploma in Technology (Agriculture)<br/>(HNDAgri)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndft/hndft.html">
                <img src="/img/food.jpg" />
                <p>Higher National Diploma In Food Technology <br/>(HNDFT) </p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndbf/hndbf.html">
                <img src="/img/bf.jpg" />
                <p>Higher National Diploma in Business Finance <br/>(HNDBF) </p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndba/hndba.html">
                <img src="/img/bma.jpeg" />
                <p>Higher National Diploma in Business Administration <br/>(HNDBA)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndbse/hndbse.html">
                <img src="/img/buldind.jpeg" />
                <p>Higher National Diploma in Engineering- (Building Services) (HNDBSE)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndce/hndce.html">
                <img src="/img/civil.jpg" />
                <p>Higher National Diploma in Engineering (Civil)<br/>(HNDCE)</p>
                </a>
             </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hnden/hnden.html">
                <img src="/img/electric.jpeg"/>
                <p>Higher National Diploma in Engineering (Electrical)<br/>(HNDEN)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndenglish/hndenglish.html">
                <img src="/img/english.jpg" />
                <p>Higher National Diploma in English<br/>(HNDEnglish)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndthm/hndthm.html">
                <img src="../img/HNDTHM.jpg" />
                <p>Higher National Diploma in Tourism and Hospitality Management (HNDTHM) </p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndm/hndm.html">
                <img src="/img/management.jpg" />
                <p>Higher National Diploma in Management<br/>(HNDM)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndma/hndma.html">
                <img src="/img/mechanical.jpg"/>
                <p>Higher National Diploma in Engineering (Mechanical)<br/>(HNDMA)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndmg/hndmg.html">
                <img src="/img/project mange.jpeg"/>
                <p>Higher National Diploma in Project Management<br/>(HNDMG)</p>
                </a>
            </div>
        </div>
        <div class="course">
            <div class="content">
                <a href="../coursescat/hndqs/hndqs.html">
                <img src="/img/quantitysurveyor.jpg" />
                <p>Higher National Diploma in Quantity Survey <br/>(HNDQS)</p>
                </a>
            </div>
        </div>
     

        </div>
    </>
  )
}

export default Course
