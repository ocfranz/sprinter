import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';
import PropTypes from 'prop-types';
const Input = styled.input`
    border: 0px;
    padding : 0.5rem;
    width: 100%;
    background-color : ${colors.default};
    &:focus{
        outline : none;
        box-shadow : none;
    }
    ${ props =>
        (!props.valid) && css`
            border: 1px solid red; 
        `
    }
`;

Input.defaultProps = {
    valid : true,
    autoComplete : "off"
}

export default Input;