import React from "react"

function Header(){
   return(<div className="navbar">
   <h1>Ameya</h1>
   <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    {/* <li><a href="#">Certifications</a></li> */}
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>    
   </ul>
   </div>);
}
export default Header;