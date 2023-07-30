import React from 'react';
import styled from "styled-components";
import avatar from "../../images/avatar.webp"

export const Logo = () => {
    return (
        <StyledLogo>
            <Avatar src={avatar}/>
            <NameWrapper>
                <Disclaimer>
                    <p>Дизайнер</p>
                    <p>Разработчик</p>
                    <p>Фантазер</p>
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
`

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

const NameWrapper = styled.div`

`

const Name = styled.h3`
  font-size: 24px;
`

const Disclaimer = styled.div`
  display: flex;
  gap: 8px;
  p {
    font-size: 12px;
  }
`

