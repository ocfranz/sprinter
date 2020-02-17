import React, { useState } from 'react';
import styled, { css } from 'styled-components';
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
        width: 90px;
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
    color : ${colors.sidebarDefault};
    &:hover{
        background-color : ${colors.default};
    }
    ${props => 
        props.active && css`
            color : ${colors.primary};
            border-top: 5px solid ${colors.primary};
            ${media.md`
                border-left: 5px solid ${colors.primary};
                border-top: 0px;
            `}

        `
    }
    `;
const Icon = styled.span`
    font-size: 25px;
    ${media.md`font-size: 28px;`}
`;

const Sidebar = ({})=>{

    const [ activeIndex , setActiveIndex ] = useState(1);
    const handleMenuItemClick = (n, url)=>{
        setActiveIndex(n);
        //window.location.href = url;
    }

    return(
        <SidebarContainer>
            <SidebarMenu>
                <SidebarMenuItem>
                    <Brand>
                        <span>S</span>
                    </Brand>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <MenuItemContainer  active={ activeIndex == 1 ? true : false} onClick={()=>handleMenuItemClick(1, "/home")}>
                        <Icon className="icon icon-task" />
                    </MenuItemContainer>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <MenuItemContainer  active={ activeIndex == 2 ? true : false} onClick={()=>handleMenuItemClick(2, "/team")}>
                        <Icon className="icon icon-users" />
                        
                    </MenuItemContainer>
                   
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <MenuItemContainer  active={ activeIndex == 3 ? true : false} onClick={()=>handleMenuItemClick(3, "/reports")}>
                        <Icon className="icon icon-chart"/>
                     
                    </MenuItemContainer>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarContainer>
    );
}

export default Sidebar;