import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ className, type, name, id, placeholder}) =>{
    return(
        <input className={`simple-input ${className}`} type={type} name={name} id={id} placeholder={placeholder}/>
    );
}
Input.defaultProps = {
    className : 'simple-input--default',
    type : 'text'
}
Input.propTypes = {
    className : PropTypes.string,
    type : PropTypes.string,
    name : PropTypes.string,
    placeholder : PropTypes.string,
    id : PropTypes.string.isRequired
}

export default Input;

