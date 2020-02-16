import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

import { colors } from '../../styles/colors';

const Button = styled.button`
    padding : 10px 32px;
    border: 0;
    margin: 0px 10px;
    &:focus{
        outline : none;
        box-shadow: none;
    }
    ${props =>
        props.primary &&
        css`
          background: #0e30f0;
    `}
`; 

Button.propTypes = {
    onClick : PropTypes.func.isRequired
}

export default Button;