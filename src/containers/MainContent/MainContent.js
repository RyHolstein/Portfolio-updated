import React from 'react'; 
import { Route } from 'react-router-dom';

import MainPage from '../../components/Content/MainPage/MainPage'
import About from '../../components/Content/About/About';
import Projects from '../../components/Content/Projects/Projects';
import Contact from '../../components/Content/Contact/Contact';

import './MainContent.css';





const mainContent = () => {
    return (
        <div className='MainContent'>
            
            <Route path='/' exact component={MainPage} />
            <Route path='/about' exact component={About} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/contact' exact component={Contact} />
        </div>
    );
}

export default mainContent; 