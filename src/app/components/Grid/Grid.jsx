import styled from 'styled-components';

import { media } from '../../styles/mixins';

const Grid = styled.div`
    margin: auto 15px;
    ${media.sm`margin: auto 50px;`}
    ${media.md`margin: auto 100px;`}
    ${media.lg`margin: auto 300px`}
`;

export default Grid;