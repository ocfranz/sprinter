import React from 'react';
import PropTypes from 'prop-types';

import './Sidebar.scss';
import Brand from '../../components/Brand';
import Link from '../../components/Link';
const Sidebar = ({className})=>{
    return(
        <div className={`sidebar ${className}`}>
            <div className="sidebar__wrapper">
                <div className="sidebar__header">
                    <Brand children="Sprinter" />
                </div>
                <div className="sidebar__links">
                    <Link children="Dashboard" href="/dashboard"/>
                    <Link children="Dashboard" href="/projects"/>
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