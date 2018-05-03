import React from 'react';
import { Link } from 'react-router-dom';

import './NavMenu.css'

const navMenu = () =>{
    return(
        <ul className="NavMenu">
        
            <li><Link to ='/projects' >Projects</Link></li>
            <li><Link to ='/contact' >@me</Link></li>
        </ul>
    );
}

export default navMenu; 
