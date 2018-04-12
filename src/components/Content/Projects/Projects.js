import React from 'react';
import { Route } from 'react-router-dom';

import Project from './Project/Project';
import ProjectSelector from './ProjectSelector/ProjectSelector'

import './Projects.css';


const projects = () => {
    return (
        <div>
           <Route path='/projects' exact component={ProjectSelector} />
           <Route path='/projects/one' exact component={Project} />
           <Route path='/projects/2' exact render={() => <h1>Here is the info for Project 2</h1>} />
        </div>
    )
}

export default projects; 
