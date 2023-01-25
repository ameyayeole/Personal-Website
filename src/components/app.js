import React from "react"
import Header from "./header.js"
import Home from "./home.js"
import About from "./about.js"
import Skills from "./skills.js"
import Project from "./project.js"
import Contact from "./contact.js"
function App(){
    return(
        <React.Fragment>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        </React.Fragment>
    );
};
export default App;