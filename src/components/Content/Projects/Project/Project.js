import React from 'react';
import projectList from './ProjectInfo'
import './Project.css'

import test1 from '../../../../assets/Projects/testing.jpg';
import test2 from '../../../../assets/Projects/testing2.jpg'

const project = (props) => {
    console.log(props.match.params.title)
    const noProject = {
        title: '',
        desc: '',
        img: [],
    }
    let currentProject = noProject

    //checks to make sure there is not a bad path /project/:title 
    if (projectList[props.match.params.title]){
        currentProject = projectList[props.match.params.title]
    }
   
    
    return (
        <div className="indiv__project__holder">
            <h3 className="indiv__project__title">{currentProject.title}</h3>
            <p className="indiv__project__desc">&lt;about&gt;<span>{currentProject.desc}</span>&lt;&#47;about&gt;</p>
            <p></p>
            <div className="sectional__divider dark"></div>
            <div className="indiv__bottom-section">
                <div className="indiv__project__my-info--holder"> 
                    <p>&lt;date&gt;</p>
                    <p><span>2016</span></p>
                    <p>&lt;&#47;date&gt;</p>
                </div>
                <div className="indiv__project__my-info--holder"> 
                    <p>&lt;role&gt;</p>
                    <p><span>Fullstack</span></p>
                    <p>&lt;&#47;role&gt;</p>
                </div>
                <p class="indiv__project__screen">&lt;screens&gt;</p>

                <div className="indiv__project__screens--holder">
                    <img src={test2} />
                    <img src={test1} />
                </div>
                <p class="indiv__project__screen">&lt;&#47;screens&gt;</p>

            </div>
            <div className="sectional__divider light"></div>
            <div className="indiv__project__next">
                <p className="indiv__project__next--text">&lt; Next Project &#47;&gt;</p>
            </div>

        </div>
    ) 
}

export default project;