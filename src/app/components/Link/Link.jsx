import React from 'react';
import PropTypes from 'prop-types';

import './Link.scss';

const Link = ({className, children, href}) =>{
    return <a className={`simple-link ${className}`} href={href}>{children}</a>
}

Link.defaultProps = {
    className : 'simple-link--default'
}
Link.propTypes = {
    className : PropTypes.string,
    children : PropTypes.oneOf([PropTypes.string, PropTypes.element]).isRequired,
    href : PropTypes.string.isRequired
}
export default Link;