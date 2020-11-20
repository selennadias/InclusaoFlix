import React from "react"; 
import { FooterBase } from "./styles";
import logo from "../../assets/i1.png"


function Footer() { 
 return ( 
 <FooterBase> 
 <a>  <img src={logo} className="Logo" alt="InclusaoFlix Logo"/>
 </a> 
 <p>Elenna e Mainara</p>  </FooterBase> 
 ); 
} 
export default Footer;
