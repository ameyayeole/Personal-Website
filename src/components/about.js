import React from "react"

function About(){
return(
    <div id ="about" className="about">
    <div className="aboutLeft">
    <img className="manOnLaptop" alt = "" src={require("./images/manOnLAptop.png")} />
    <img className="quote" alt = "" src={require("./images/quote.png")}/>
    </div>
    <div className="aboutRight">
    <p className="aboutYellow">About me</p>
    <p className="aboutMain">I'm an
     <span className="yellow">&nbsp;undergraduate student&nbsp;</span>
      focused on improving my technical skills and become a
      <span className="yellow">&nbsp;proficient&nbsp;</span>
       full stack web developer</p>
    </div> 
    </div>
);
};

export default About;
