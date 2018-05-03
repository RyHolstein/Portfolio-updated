import React from 'react';
import projectList from './ProjectInfo'
const project = (props) => {
    console.log(props.match.params.title)
    let currentProject = projectList[props.match.params.title]
    return (
        <div>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.desc}</p>
         
        </div>
    ) 
}

export default project