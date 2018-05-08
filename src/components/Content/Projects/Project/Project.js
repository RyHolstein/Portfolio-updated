import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projectList from './ProjectInfo';
import './Project.css';


class Project extends Component {
    
 
    componentDidUpdate() {
        
        
        
        
        window.scrollTo(0, 0);


    }
    render() {
        const noProject = {
            title: '',
            desc: '',
            imgs: [],
        }
        let currentProject = noProject;
    
        //checks to make sure there is not a bad path /project/:title 
        if (projectList[this.props.match.params.title]){
            currentProject = projectList[this.props.match.params.title]
        }
       let nextPath = '/projects/' + currentProject.nextProject;
        return (
            <div className="indiv__project__holder">
                <h3 className="indiv__project__title" id ="Ani_project_title" >{currentProject.title}</h3>
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
                    <p className="indiv__project__screen">&lt;screens&gt;</p>
    
                    <div className="indiv__project__screens--holder">
                        {currentProject.imgs.map(img => (
                            <img key={img}src={img}/>    
                        ))}
                    </div>
                    <p className="indiv__project__screen">&lt;&#47;screens&gt;</p>
    
                </div>
                <div className="sectional__divider light"></div>
    
                <Link to ={nextPath} > <div className="indiv__project__next">
                    <p className="indiv__project__next--text p_first">&lt; {currentProject.nextProject} &#47;&gt;</p>
                    <p className="indiv__project__next--text p_second">&lt; {currentProject.nextProject} &#47;&gt;</p>
                    <p className="indiv__project__next--text p_third">&lt; {currentProject.nextProject} &#47;&gt;</p>
                </div></Link>
    
            </div>
        ) 

    }
}

export default Project;