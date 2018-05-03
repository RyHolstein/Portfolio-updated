import React from 'react';
import { Route, Link } from 'react-router-dom';

import Project from './Project/Project';

import './Projects.css';


const projects = () => {
    return (
        <div>
            <h2>Please Select a project</h2>
            <Link to ='/projects/loveisabella' >
                <h3>Project 1</h3>
            </Link> 
            <Link to ='/projects/riddlefamilyFoundation' >
                <h3>Project 2</h3>
            </Link> 
           
        </div>
    )
}

export default projects; 
