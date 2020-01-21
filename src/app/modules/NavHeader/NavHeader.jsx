import React from 'react';
import PropTypes from 'prop-types';

import './NavHeader.scss';
import Link from '../../components/Link';

const NavHeader = ({className}) =>{
    return(
        <div className={`nav-header ${className}`}>
            <div className="nav-header__container">
                <Link children="Buscar"></Link>
            </div>
        </div>
    );
}
NavHeader.defaultProps = {
    className : 'nav-header--default'
}
NavHeader.propTypes = {
    className : PropTypes.string
}
export default NavHeader;