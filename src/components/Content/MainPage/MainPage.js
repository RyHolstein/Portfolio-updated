import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux';
import graphic from '../../../assets/graphic.png'
import './MainPage.css'



const mainPage = () => {
    return (
        <div className="fp__holder">
            <div className="fp__main-holder">
                <h1 className="fp__my-name">Ryan</h1>
                <div></div>
                <h1 className="fp__my-name">Holstein</h1>
                
                <h3 className="fp__job-desc">Full Stack Developer</h3>
                <img className="fp__graphic--main" src = {graphic}/>
            </div>
            <div>
                <div className="link__holder left">
                     <Link className="lef a_first" to ='/contact' >&lt; @me &#47;&gt;</Link>
                 
                
                </div>
                <div className="link__holder right">
                    <Link className="rig a_first" to ='/projects' >&lt; Projects &#47;&gt;</Link>
                  
                    
                </div>
            </div>



        </div>
        
    );

}


export default mainPage;