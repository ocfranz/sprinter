import React from 'react';
import PropTypes from 'prop-types';

import './Logo.scss';
const Logo = ({ className, imageSrc, alt, handleOnClick})=>{
    return <img className={`logo-header ${className}`} src={imageSrc} alt={alt} onClick={handleOnClick}/>
}
Logo.defaultProps = {
    className : 'logo-header--default',
    alt : 'logo-header'
}
Logo.propTypes = {
    className : PropTypes.string,
    alt : PropTypes.string,
    imageSrc : PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    handleOnClick : PropTypes.func
}
export default Logo;