import styled from 'styled-components';
import { media } from '../../styles/mixins';
const Container = styled.div`
    padding : 20px 10px;
    background-color: #fafafa;
    ${media.sm`padding: 20px;`}
    ${media.md`padding: 10px 25px;`}
`;

export default Container;