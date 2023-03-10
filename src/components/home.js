import React from "react"
import '../style.css'

function Home(){
    return(
        <div id="home" className="home">
        <div className="intro">
        <span className="yellowText1">Hello,</span>
        <p className="introName">I'm 
        <span className="yellowText2"> Ameya Yeole</span>
        </p>
        <p className="introDesc">An aspiring Full Stack Web Developer</p>
        <button className="contactButton"><a  href="#contact">Contact me</a></button>
        <button className="contactButton"><a  href={require("./images/myResume.pdf")} target="_blank">Resume</a></button>
        </div>
        <div>
        <img className="manIMG" alt="hello" src={require("./images/man.png")}/>
        </div>
        </div>
    )
}
export default Home;
