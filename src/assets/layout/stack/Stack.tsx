import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {Icon} from "../../components/icon/Icon";

export const Stack = () => {
    return (
        <StyledDirections>
            <ContainerWrapper>
                <FlexWrapper gap={"40px"}>
                    <BigText>UIX</BigText>
                    <BigText>3D</BigText>
                </FlexWrapper>
                <BigText>Front-end</BigText>
                <BigText>Motion</BigText>

                <StyledStack>
                    <ContainerWrapper>
                        <Icon iconId={"figma"} width={"120"} height={"120"}/>
                        <Icon iconId={"html"} width={"120"} height={"120"}/>
                        <Icon iconId={"css"} width={"120"} height={"120"}/>
                        <Icon iconId={"sass"} width={"120"} height={"120"}/>
                        <Icon iconId={"react"} width={"120"} height={"120"}/>
                    </ContainerWrapper>
                </StyledStack>
            </ContainerWrapper>
        </StyledDirections>
    );
};

const StyledDirections = styled.section`
  padding: 100px 200px;
`

const BigText = styled.p`
  font-size: 196px;
  font-weight: 900;
  text-transform: uppercase;
`
const StyledStack = styled.div`
  display: flex;
  justify-content: space-between;
`