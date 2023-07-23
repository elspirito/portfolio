import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Icon iconId={"spirito"} width={"75"} height={"48"} viewBox={"0 0 75 48"}/>
            <p>© 2013 — 2023</p>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 300px;
  background-color: #555;
  padding: 100px 200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`