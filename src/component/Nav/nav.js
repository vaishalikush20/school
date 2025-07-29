import { Link } from "react-router-dom";

export default function Nav(){
    return<>
    <section id="HOME">
        <div className="inform">
            <h4> Call us 0731-4212999 </h4>
            <h4> CBSE Affillation No. 1030187</h4>
            <h4> Admission Open For 2025-26</h4>
        </div>
        <nav>
               <div className="logo"> 
                <img src="School/img/logo-45 (1).jpg" alt=" logo-45 (1)" />
              </div>
              <div className="menu">
                <ul>
                  {/* <li><a href="#Home">HOME</a></li> */}
                  <Link to={"/"} >  HOME  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                  {/* <li><a href="#About Us"> ABOUT US</a> </li> */}
                 < Link to={"/About_us"}>ABOUT US</Link>
                  <li> <a href="ABOUT CHAIRMAN">CHAIRMAN</a></li>
                  <li><a href="OUR PRIDE" >OUR PRIDE</a> </li>
                  <li><a href="ADMISSION"> ADMISSION </a></li>
                  <li><a href="FEES"> FEES </a></li>
                  <li><a href="FACILITIES" >FACILITIES</a></li>
                  <li><a href="GLIMPSES" >GLIMPSES</a></li>
                  <li> <a href="CONTACT US" >CONTACT US</a></li>
                </ul>
              </div> 
        </nav>
        </section>
    </>
}