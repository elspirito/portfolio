import React from 'react';
import styled from "styled-components";
import avatar from "../../images/avatar.webp"
import {theme} from "../../styles/Theme";

export const Logo = () => {
    return (
        <StyledLogo href={"/"}>
            <Avatar src={avatar}/>
            <NameWrapper>
                <Disclaimer>
                    <small>Дизайнер</small>
                    <small>Разработчик</small>
                    <small>Фантазер</small>
                </Disclaimer>
                <Name>
                    Савинов Артем
                </Name>
            </NameWrapper>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;

  &:hover {
    color: ${theme.colors.dark.accent.base};
  }
`

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Name = styled.h3`
  font-size: 24px;
`

const Disclaimer = styled.div`
  display: flex;
  gap: 8px;

  small {
    font-size: 12px;
    font-weight: 300;
    opacity: 0.5;;
  }
`

