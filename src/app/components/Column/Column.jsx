import styled, { css } from 'styled-components';
import { media } from '../../styles/mixins';

const Column = styled.div`
    width : ${props => (100/props.xs) }%;
    text-align: center;
    ${props => props.filled && css`background-color : #BEBEDF; padding: 20px 0px; border: 1px solid;`}
    ${media.sm`width : ${props => (100/props.sm) }%;`}
    ${media.md`width : ${props => (100/props.md) }%;`}
    ${media.lg`width : ${props => (100/props.lg) }%;`}
`;

Column.defaultProps = {
    xs : 1,
    sm : 1
}

export default Column;