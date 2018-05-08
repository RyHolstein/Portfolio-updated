import React from 'react';
import { Route, Link } from 'react-router-dom';

import Project from './Project/Project';
import projectsInfo from './Project/ProjectInfo';

import './Projects.css';


const projects = () => {
      

    return (
        <div className="projects__holder">
            
            {Object.keys(projectsInfo).map(project => {
                let urlLink = '/projects/'+project;
                let work = projectsInfo[project];
                
                return (
                        <Link key= {project} to ={urlLink}>
                        <div className='project__holder'>
                                <p className="project__title first">&lt; {work.title} &#47;&gt;</p>
                                <p className="project__title second">&lt; {work.title} &#47;&gt;</p>
                                <p className="project__title third">&lt; {work.title} &#47;&gt;</p>
                        </div>
                        </Link> 
                )

                })
         }
            
          
          
     
        </div>
    )
}

export default projects; 
