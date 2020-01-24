import React from 'react';
import PropTypes from 'prop-types';

import './SidebarMenu.scss';
import Link from '../../components/Link';

const SidebarMenu = ({ className, listMenu}) =>{
    return(
        <div className={`sidebar-menu ${className}`}>
            <ul class="list-group sidebar-menu__group">
                <li class="list-group-item sidebar-menu__item sidebar-menu__item-active">
                    <Link children={
                        <>
                        <i className="icon icon-edit"></i>
                        
                        </>
                    } 
                    href="/home"
                    />
                </li>
                <li class="list-group-item">
                    <Link children={
                        <>
                        <i className="icon icon-edit"></i>
                        </>
                    } 
                    href="/dashboard"
                    />
                </li>
                <li class="list-group-item">
                    <Link children={
                        <>
                        <i className="icon icon-like"></i>
                        </>
                    } />
                </li>
            </ul>
        </div>
    );
}
SidebarMenu.defaultProps = {
    className : 'sidebar-menu--default'
}
SidebarMenu.propTypes = {
    className : PropTypes.string,
    listMenu : PropTypes.array,
}
export default SidebarMenu;