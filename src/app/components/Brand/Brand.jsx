import React from 'react';
import PropTypes from 'prop-types';

import './Brand.scss';
const Brand = ({ className, children})=>{
    return <span className={`brand-header ${className}`}>{children}</span>
}
Brand.defaultProps = {
    className : 'brand-header--default',
   
}
Brand.propTypes = {
    className : PropTypes.string,
    children : PropTypes.string.isRequired
}
export default Brand;