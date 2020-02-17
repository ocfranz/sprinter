import styled, { css } from 'styled-components';
import { media } from '../../styles/mixins';
import { colors } from '../../styles/colors';
const Container = styled.div`
    background-color: #fafafa;
    ${ props => 
        props.fullpage && css`
            height: 100%;
            width: 100%;
            padding : 0;
            background-color: ${colors.default};
        `
    }
    ${ props => 
        props.padd && css`
            padding : 20px 10px;
            ${media.sm`padding: 20px;`}
            ${media.md`padding: 10px 25px;`}
        ` 
    }
`;

export default Container;