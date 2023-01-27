import react from "react"
 
function Contact (){
    return (
        <div className="contact" id="contact">
        <h1 className="skillHead">Contact Me</h1>
        <div className="logos">
        <a className="a" href="www.linkedin.com/in/ameyayeole"><img className="logo"src={require("./images/linkedin.png")} alt=""/></a>
        <a href="https://mail.google.com/mail/u/0/?hl=en&tf=cm&fs=1&to=yeoleameya8@gmail.com"><img className="logo" src={require("./images/gmail-logo.png")} alt=""/></a>        
        <a href="https://www.instagram.com/yeoleameya"><img className="logo" src={require("./images/instagram.png")} alt=""/></a>
        <a href="https://www.github.com/ameyayeole"><img className="logo" src={require("./images/github.png")} alt=""/></a>
        </div>
        </div>
    )
}
export default Contact;