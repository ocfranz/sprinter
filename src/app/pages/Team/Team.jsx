import React from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import Container from '../../components/Container';
import Sidebar from '../../modules/Sidebar';
const Team = ({})=>{
    return(
        <Page>
            <Sidebar />
            <Container fullpage={true}>
                Team
            </Container>
        </Page>
    );
}

export default Team;