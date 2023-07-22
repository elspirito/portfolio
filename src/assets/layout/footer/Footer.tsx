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
  height: 300px;
  background-color: #aaa;
  padding: 100px 200px;
  display: flex;
  flex-direction: row;
  gap: 40px;
`