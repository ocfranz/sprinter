import React from 'React';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #220FFF;
    padding : 18px 32px;
    border: 0;
    
`; 
const Button = ({ children, handleOnClick}) => {
    return(
        <StyledButton onClick={handleOnClick}>{children}</StyledButton>
    );
}


Button.propTypes = {
    children : PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    handleOnClick : PropTypes.func.isRequired
}

export default Button;