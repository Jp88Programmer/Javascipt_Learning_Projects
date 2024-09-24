import React from "react";
import {Link} from 'react-router-dom'
const Footer = () => {
    return(
        <>
        

            <div className='footer'>
            <div className='footer-layout'>
                <ul className='footer-links'>
                <li><Link className='foot-links' to="/frontend">Front-End Developer Roadmap</Link></li>
                <li><Link className='foot-links' to="/orthopedics">Orthopedics Roadmap</Link></li>
                <li><Link className='foot-links' to="/assetmanager">Asset Management Roadmap</Link></li>
                </ul>
            </div>
            <div className='foot-linker'>
                <ul className='footer-links'>
                <li><a href="1" className='foot-links'><i className="fa fa-github"></i>Github</a></li>
                <li><a href="1" className='foot-links'><i className='fa fa-linkedin-square'></i>Linkedin</a></li>
                <li><a href='1' className='foot-links'><i className="fa fa-phone"></i>Contect experts</a></li>
                </ul>
            </div>

            </div>
            <ul className='links'>
            
            </ul>
        
        </>
        
    )
}

export default Footer;