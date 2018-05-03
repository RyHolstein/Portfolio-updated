import React from 'react';
import { Route, Link } from 'react-router-dom';


import './TopLeftHeader.css'

import Aux from '../../../hoc/Aux';


const topLeftHeader = () => {
    return (
        <Aux>
            <Link to ='/' >
                <Route path='/' exact render={() => <h1 className='TopLeftHeader'>Welcome</h1>} />
                <Route path='/projects' render={() => <h1 className='TopLeftHeader'>Some Projects</h1>}/>
                <Route path='/contact' render={() => <h1 className='TopLeftHeader'>And You Are?</h1>}/>
            </Link>
        </Aux>
    );
}

export default topLeftHeader;