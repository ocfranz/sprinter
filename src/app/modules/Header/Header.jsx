import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';
import Brand from '../../components/Brand';
import Input from '../../components/Input';
import UserAvatar from '../../components/UserAvatar';
const Header = ({className}) =>{
    return(
        <header className={`header ${className}`}>
            <div className="header__container">
                <div className="row"> 
                    <div className="col-3 col-md-2 header__brand">
                        <Brand children="Sprinter"/>
                    </div>
                    <div className="col-6 col-md-5 header__search">
                        <Input name="quick-search" id="quick-search" placeholder="Search"/>
                    </div>
                    <div className="col-3 col-md-5 header__user">
                        <UserAvatar 
                        children={<span>F</span>} 
                        />
                    </div>
                </div>
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