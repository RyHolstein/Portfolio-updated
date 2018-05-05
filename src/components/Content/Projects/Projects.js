import React from 'react';
import { Route, Link } from 'react-router-dom';

import Project from './Project/Project';

import './Projects.css';


const projects = () => {
    return (
        <div className="projects__holder">
            
            <Link to ='/projects/cianmoore'>
            <div className='project__holder'>
                    <p className="project__title">&lt; <span> Cian Moore </span> &#47;&gt;</p>
            </div>
            </Link> 
         
            <div></div>
            <Link to ='/projects/loveisabella' >
            <div className='project__holder'>

                    <p className="project__title">&lt; <span> Love Isabella </span> &#47;&gt;</p>
            </div>
            </Link>
            
            <div></div>
            <Link to ='/projects/riddlefamilyFoundation' >
            <div className='project__holder'>
                    <p className="project__title">&lt; <span> Riddle Family Foundation </span> &#47;&gt;</p>
            </div>
            </Link> 
        
            <div></div>
            <Link to ='/projects/twothumbsup' >
            <div className='project__holder'>
                    <p className="project__title">&lt; <span> Two Thumbs Up </span> &#47;&gt;</p>
            </div>
            </Link> 
            
            <div></div>
            <Link to ='/projects/createsafebeta' >
            <div className='project__holder'>
                    <p className="project__title">&lt; <span> CreateSafe Beta </span> &#47;&gt;</p>
            </div>
            </Link> 

           
             
            
           
          
     
        </div>
    )
}

export default projects; 
