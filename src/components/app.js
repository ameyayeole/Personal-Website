import React from "react"
import Header from "./header.js"
import Home from "./home.js"
import about from "./about.js"
import About from "./about.js";
function App(){
    return(
        <React.Fragment>
        <Header/>
        <Home/>
        <About/>
        </React.Fragment>
    );
};
export default App;