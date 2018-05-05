import React from 'react';
import { Route, Link } from 'react-router-dom';

import Project from './Project/Project';

import './Projects.css';


const projects = () => {
    return (
        <div className="projects__holder">
            
            <Link to ='/projects/cianmoore'>
            <div className='project__holder'>
                    <p className="project__title">&lt;title&gt; <span>Cian Moore</span> &lt;&#47;title&gt;</p>
            </div>
            </Link> 
         
            <div></div>
            <Link to ='/projects/loveisabella' >
            <div className='project__holder'>

                    <p className="project__title">&lt;title&gt; <span>Love Isabella</span> &lt;&#47;title&gt;</p>
            </div>
            </Link>
            
            <div></div>
            <Link to ='/projects/riddlefamilyFoundation' >
            <div className='project__holder'>
                    <p className="project__title">&lt;title&gt; <span>Riddle Family Foundation</span> &lt;&#47;title&gt;</p>
            </div>
            </Link> 
        
            <div></div>
            <Link to ='/projects/twothumbsup' >
            <div className='project__holder'>
                    <p className="project__title">&lt;title&gt; <span>Two Thumbs Up</span> &lt;&#47;title&gt;</p>
            </div>
            </Link> 
            
            <div></div>
            <Link to ='/projects/createsafebeta' >
            <div className='project__holder'>
                    <p className="project__title">&lt;title&gt; <span>CreateSafe Beta</span> &lt;&#47;title&gt;</p>
            </div>
            </Link> 

           
             
            
           
          
     
        </div>
    )
}

export default projects; 
