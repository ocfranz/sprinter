import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/mixins';
import { colors } from '../../styles/colors';

import Brand from '../../components/Brand';
const SidebarContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    ${ media.md` 
        flex-direction:column;
        width: 100px;
        height: 100%;`
    }
`;
const SidebarMenu = styled.ul`
    display: flex;
    align-items: left;
    flex-direction: row;
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    ${ media.md` flex-direction:column;`}
`;
const SidebarMenuItem = styled.li`
    width : ${100/4}%;
    text-align : center;
    display : flex;
    align-items : center;
    ${ media.md`
        flex-direction:column;
        width : 100%;
        height: 70px;
    `}
`;
const MenuItemContainer = styled.div`
    height: 100%;
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    cursor: pointer !important;

    &:hover{
        background-color : ${colors.default};
    }
    `;
const Icon = styled.span`
    font-size: 30px;

`;

const Sidebar = ()=>{
    return(
        <SidebarContainer>
            <SidebarMenu>
                <SidebarMenuItem>
                    <Brand>
                        <span>Sprinter</span>
                    </Brand>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <MenuItemContainer>
                        <Icon className="icon icon-task" />
                            
                    </MenuItemContainer>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <MenuItemContainer>
                        <Icon className="icon icon-users" />
                        
                    </MenuItemContainer>
                   
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <MenuItemContainer>
                        <Icon className="icon icon-chart"/>
                     
                    </MenuItemContainer>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarContainer>
    );
}

export default Sidebar;