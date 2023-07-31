import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Icon} from "../icon/Icon";

export const Menu = (props: { menuData: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuData.map(
                    (menuDataItems, index) => {
                        return (
                            <MenuItem key={index}>
                                <Icon iconId={"star"}/>
                                <MenuLink href="">{menuDataItems}</MenuLink>
                            </MenuItem>
                        )
                    }
                )}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }
`

const MenuItem = styled.li`
display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: ${theme.colors.dark.accent.base};
  }
`

const MenuLink = styled.a`
  font-weight: 300;
  
  &:hover {
    color: ${theme.colors.dark.accent.base};
  }
  
`