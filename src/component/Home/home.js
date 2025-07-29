import About from "../ABOUT_US/About_us"
import Camp from "../CAMPUS/Campus"
import Facii from "../Facility/facility"
import Last from "../Footer/Footer"
import Header from "../header/Header"
import Nav from "../Nav/nav"
export default function HOME(){
    return<>
    <Nav />
    <Header/>
    <About/>
    <Camp/>
    <Facii/>
    <Last/>
    </>
}