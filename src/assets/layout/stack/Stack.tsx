import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Mixins";

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
  border-bottom: 2px solid ${theme.colors.dark.tertiaryBg};
  padding-bottom: 100px;
  margin-bottom: 100px;
`

const BigText = styled.p`
  ${font({weight: 1000, Fmax: 192, Fmin: 46, lineHeight: 1.1, color: "#333"})};
  text-transform: uppercase;
  text-align: right;
`

const StackIcons = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.dark.fontSecondary};
`