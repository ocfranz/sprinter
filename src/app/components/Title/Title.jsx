import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from '../../styles/mixins';

const Title = styled.span`
    font-size : 18px;
    font-weight : bold;
    margin-bottom : 10px;
    display : block;
    ${props => props.small && css` font-size : 16px; font-weight: normal;`}
    ${media.lg`font-size : 20px;`}

`;
export default Title;