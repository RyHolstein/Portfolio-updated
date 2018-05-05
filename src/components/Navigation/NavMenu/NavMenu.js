import React from 'react';
import { Link } from 'react-router-dom';

import './NavMenu.css'

const navMenu = () =>{
    return(
        <ul className="NavMenu">
            <li><Link to ='/contact' >@me</Link></li>
            <li><Link to ='/projects' >Projects</Link></li>
        
        </ul>
    );
}

export default navMenu; 
