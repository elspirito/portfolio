import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";

export const Stack = () => {
    return (
        <StyledStack>
            <ContainerWrapper>

                <Directions>
                    <FlexWrapper gap={"40px"}>
                        <BigText>UIX</BigText>
                        <BigText>3D</BigText>
                    </FlexWrapper>
                    <BigText>Front-end</BigText>
                    <BigText>Motion</BigText>
                </Directions>

                <StackIcons>
                    <Icon iconId={"figma"} width={"120"} height={"120"}/>
                    <Icon iconId={"html"} width={"120"} height={"120"}/>
                    <Icon iconId={"css"} width={"120"} height={"120"}/>
                    <Icon iconId={"sass"} width={"120"} height={"120"}/>
                    <Icon iconId={"react"} width={"120"} height={"120"}/>
                </StackIcons>

            </ContainerWrapper>
        </StyledStack>
    );
};

const StyledStack = styled.section`
`
const Directions = styled.div`
  border-bottom: 1px splid ${theme.colors.dark.fontSecondary};
`

const BigText = styled.h6`
  font-size: 175px;
  font-variation-settings: 'wght' 1000;
  text-transform: uppercase;
  text-align: right;
  color: #333;
`

const StackIcons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
`