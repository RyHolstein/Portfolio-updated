import React from 'react'; 
import { Link } from 'react-router-dom';
const projectSelector  = () => {
    return (
        <div>
            <h2>Please Select a project</h2>
            <Link to ='/projects/one' >
                <h3>Project 1</h3>
            </Link> 
            <Link to ='/projects/2' >
                <h3>Project 2</h3>
            </Link> 
        </div>
    ) 
}

export default projectSelector;