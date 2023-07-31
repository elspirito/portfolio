import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {ContainerWrapper} from "../../components/ContainerWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <ContainerWrapper>
                <Icon iconId={"spirito"} width={"75"} height={"48"} viewBox={"0 0 75 48"}/>
                <p>© 2013 — 2023</p>
            </ContainerWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 300px;
  
  ${ContainerWrapper} {
    border-top: 2px solid #333;
    flex-direction: column;
    gap: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`