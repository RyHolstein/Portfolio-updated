import React from 'react';
import projectList from './ProjectInfo'
import './Project.css'



const project = (props) => {
    console.log(props.match.params.title)
    let currentProject = projectList[props.match.params.title]
    
    return (
        <div className="indiv__project__holder">
            <h3 className="indiv__project__title">{currentProject.title}</h3>
            <p className="indiv__project__desc">&lt;about&gt;<span>{currentProject.desc}</span>&lt;&#47;about&gt;</p>
            <p></p>
        
        </div>
    ) 
}

export default project;