import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const MobileMenu = (props: { menuData: Array<string> }) => {
    return (


        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuWrapper isOpen={false}>
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
            </MobileMenuWrapper>

        </StyledMobileMenu>

    );
};


const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.large} {
    display: block;
  }
`

const BurgerButton = styled.div<{ isOpen: boolean }>`
  width: 100px;
  height: 100px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99999;

  span {
    position: absolute;
    top: 40px;
    left: 24px;
    display: block;
    height: 3px;
    width: 36px;
    background-color: hsla(255, 100%, 100%, 1);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: hsla(255, 100%, 100%, 0);
    `};

    &::before {
      content: "";
      display: block;
      height: 3px;
      width: 36px;
      background-color: #fff;
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `};
    }

    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 24px;
      background-color: #fff;
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        width: 36px;
        transform: rotate(45deg) translateY(0);
      `};

    }
  }
`

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  display: none;

  ul {
    display: flex;
    gap: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: hsla(0, 0%, 0%, 0.9);
    z-index: 9999;
    font-size: 40px;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: block;
  `};
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