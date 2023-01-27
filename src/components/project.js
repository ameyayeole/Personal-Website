import react from "react"

function Project(){
    return (
        <div id="projects" className="project">
        <h1 className="skillHead">PROJECTS</h1>
        <div className="projectImg">
        <a target="_blank"  href="https://www.youtube.com/watch?v=FfieNrugrmM&feature=youtu.be&ab_channel=EshanTrivedi"><img className="foodKart img" src={require("./images/foodkart.jpg")}/></a>
        <a target="_blank"  href="https://ameyayeole.github.io/The-Simon-Game/"><img className="simon img" src={require("./images/Simon.png")}/></a>
        <a target="_blank"  href="https://github.com/ameyayeole/keeper-website"><img className="keeper img" src={require("./images/keeper.png")}/></a>
        
        </div>
        </div>
    )
}

export default Project;