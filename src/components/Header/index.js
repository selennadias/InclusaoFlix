import React from "react"
import logo from "../../assets/logo.png"
import "./index.css"

function Header(){
     return (
         <nav className="Menu">
             <a href ="/">
                <img src={logo} className="Logo" alt="InclusaoFlix Logo"/>
             </a>

         </nav>
     )
}
export default Header;