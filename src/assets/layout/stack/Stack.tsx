import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Stack = () => {
    return (
        <StyledStack>
            <Icon iconId={"figma"} width={"120"} height={"120"}/>
            <Icon iconId={"html"} width={"120"} height={"120"}/>
            <Icon iconId={"css"} width={"120"} height={"120"}/>
            <Icon iconId={"sass"} width={"120"} height={"120"}/>
            <Icon iconId={"react"} width={"120"} height={"120"}/>
        </StyledStack>
    );
};

const StyledStack = styled.section`
  padding: 100px 200px;
  display: flex;
  justify-content: space-between;
`