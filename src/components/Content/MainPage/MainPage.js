import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux';



const mainPage = () => {
    return (
        <div>
            <div>
                <h1>Ryan Holstein</h1>
                <h3>Full Stack Developer</h3>
                <div>Graphic here</div>
            </div>
            <div>
            <Link to ='/contact' >@me</Link>
            <Link to ='/projects' >Projects</Link>

            </div>



        </div>
        
    );

}


export default mainPage;