import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const DesktopMenu = (props: { menuData: Array<string> }) => {
    return (
        <StyledHeaderMenu >
            <ul role={'menu'} aria-label="Меню">
                {props.menuData.map(
                    (menuDataItems, index) => {
                        return (
                            <MenuItem role="menuitem" key={index}>
                                <Icon iconId={"star"}/>
                                <MenuLink href="">{menuDataItems}</MenuLink>
                            </MenuItem>
                        )
                    }
                )}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }
  
  @media ${theme.media.large} {
    display: none;
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