import React from 'react';
import './TopNavigation.css';
import NavMenu from '../../components/Navigation/NavMenu/NavMenu';
import TopLeftHeader from '../../components/Navigation/TopLeftHeader/TopLeftHeader';
const topNav = () => {
    return (
        <div className="TopNav">
            <TopLeftHeader />
            <NavMenu />
            <div className="BottomDivider"></div>
        </div>
    )
}

export default topNav;