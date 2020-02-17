import styled from 'styled-components';
import { media } from '../../styles/mixins';
const Page = styled.div`
    height: 100%;
    width: 100%;
    ${media.lg`
        display : flex;
        flex-wrap : nowrap;`
    }
`;

export default Page;