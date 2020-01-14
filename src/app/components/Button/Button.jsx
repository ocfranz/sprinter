import React from 'React';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({className, children, handleOnClick}) => {
    return(
        <button className={`button-action ${className}`} onclick={handleOnClick}>{children}</button>
    );
}

Button.defaultProps = {
    className : 'button-action--default'
}

Button.propTypes = {
    className : PropTypes.string,
    children : PropTypes.oneOf([PropTypes.string, PropTypes.element]).isRequired,
    handleOnClick : PropTypes.func.isRequired
}

export default Button;