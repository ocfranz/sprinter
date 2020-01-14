import React from 'React';
import PropTypes from 'prop-types';
import './Title.scss';

const Title = ({className, children}) => {
    return(<h1 className={`title ${className}`}>{children}</h1>);
}
Title.defaultProps = {
    className : 'title--default'
}
Title.propTypes = {
    className : PropTypes.string,
    children : PropTypes.oneOf([PropTypes.string, PropTypes.element]).isRequired,
    handleOnClick : PropTypes.func.isRequired
}
export default Title;