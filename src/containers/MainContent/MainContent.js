import React from 'react'; 
import { Route } from 'react-router-dom';

import MainPage from '../../components/Content/MainPage/MainPage';

import Projects from '../../components/Content/Projects/Projects';
import Contact from '../../components/Content/Contact/Contact';
import Project from '../../components/Content/Projects/Project/Project';

import './MainContent.css';





const mainContent = () => {
    return (
        <div className='MainContent'>
            
            <Route path='/' exact component={MainPage} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/projects/:title'  component={Project} />
        </div>
    );
}

export default mainContent; 