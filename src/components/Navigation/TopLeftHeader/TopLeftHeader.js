import React from 'react';
import { Route, Link } from 'react-router-dom';


import './TopLeftHeader.css'

import Aux from '../../../hoc/Aux';


const topLeftHeader = () => {
    return (
        <Aux>
            <Link to ='/' >
                <Route path='/' exact render={() => <h1 className='TopLeftHeader'>Welcome</h1>} />
                <Route path='/about' render={() => <h1 className='TopLeftHeader'>About Me</h1>}/>
                <Route path='/projects' render={() => <h1 className='TopLeftHeader'>Recent Projects</h1>}/>
                <Route path='/contact' render={() => <h1 className='TopLeftHeader'>Contact Me</h1>}/>
            </Link>
        </Aux>
    );
}

export default topLeftHeader;