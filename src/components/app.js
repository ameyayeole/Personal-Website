import React from "react"
import Header from "./header.js"
import Home from "./home.js"
import About from "./about.js"
import Skills from "./skills.js"
function App(){
    return(
        <React.Fragment>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        </React.Fragment>
    );
};
export default App;