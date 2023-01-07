import React from "react";
import SkillItem from "./skillname.js"

const skillSet1=[
    {
        name:"C++",
        stars:4
    },
    {
        name:"DSA",
        stars:3
    },
    {
        name:"HTML",
        stars:4
    },
    {
        name:"CSS",
        stars:4
    },
    {
        name:"Javascript",
        stars:3
    },
]
const skillSet2=[
    {
        name:"React.js",
        stars:3
    },
    {
        name:"Node.js",
        stars:2
    },
    {
        name:"Express.js",
        stars:2
    },
    {
        name:"mongoDB",
        stars:2
    },

];

function createSkillSet(skillItem){
   return <SkillItem name = {skillItem.name} stars = {skillItem.stars}/>
}

function Skills(){
    return(
    <div id = "skills" className="skills">
    <h1 className="skillHead">SKILLS</h1>
    <div className="skillMain" >
        <div className="skillsLeft">
        {skillSet1.map(createSkillSet)}
        </div>
        <div className="skillsRight">
        {skillSet2.map(createSkillSet)}
        </div>
    </div>
    </div>
    );
}

export default Skills;