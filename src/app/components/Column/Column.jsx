import styled from 'styled-components';
import { media } from '../../styles/mixins';

const Column = styled.div`
    width : ${props => (100/props.xs) }%;
    ${media.sm`width : ${props => (100/props.sm) }%;`}
    ${media.md`width : ${props => (100/props.md) }%;`}
    ${media.lg`width : ${props => (100/props.lg) }%;`}
`;

Column.defaultProps = {
    xs : 1,
    sm : 1
}

export default Column;