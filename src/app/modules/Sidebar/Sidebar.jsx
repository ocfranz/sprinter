import React from 'react';
import PropTypes from 'prop-types';

import './Sidebar.scss';
import Brand from '../../components/Brand';
import Link from '../../components/Link';
import SidebarMenu from '../SidebarMenu';
import Divider from '../../components/Divider';
const Sidebar = ({className})=>{
    return(
        <div className={`sidebar ${className}`}>
            <div className="sidebar__wrapper">
                <div className="sidebar__header">
                    <Brand children="Sprinter" />
                </div>
                <div className="sidebar__links">
                    <SidebarMenu /> 
                    <Divider className="simple-divider--white"/>
                </div>    
            </div> 
        </div>
    )
}
Sidebar.defaultProps = {
    className : 'sidebar--default'
}
Sidebar.propTypes = {
    className : PropTypes.string
}

export default Sidebar;