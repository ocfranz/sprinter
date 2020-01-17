import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';
import Brand from '../../components/Brand';
const Header = ({className}) =>{
    return(
        <header className={`header ${className}`}>
            <div className="header__container">
                <Brand children="Brand"/>
            </div>
        </header>
    );
}
Header.defaultProps = {
    className : 'header--default'
}
Header.propTypes = {
    className : PropTypes.string
}
export default Header;