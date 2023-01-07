import React from "react"



function SkillItem(props){
    let stars = [];
    for(let i = 0;i<props.stars;i++){
        stars.push(<img className="starImg" alt="" src={require("./star.png")}/>);
       }
    return(<div className="skillSet">
    <div className="skillName">
    <p >{props.name}</p>
    </div>
     <div className="stars">{stars}</div>
    </div>
    );
};
export default SkillItem;