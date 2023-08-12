import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {Icon} from "../../components/icon/Icon";
import {S} from '../stack/Stack_Styles'

export const Stack: React.FC = () => {
    return (
        <S.Stack id={"stack"}>
            <ContainerWrapper>

                <S.Directions>
                    <FlexWrapper gap={"40px"}>
                        <S.BigText>UIX</S.BigText>
                        <S.BigText>3D</S.BigText>
                    </FlexWrapper>
                    <S.BigText>Front-end</S.BigText>
                    <S.BigText>Motion</S.BigText>
                </S.Directions>

                <S.StackIcons>
                    <Icon iconId={"figma"} width={"120"} height={"120"}/>
                    <Icon iconId={"html"} width={"120"} height={"120"}/>
                    <Icon iconId={"css"} width={"120"} height={"120"}/>
                    <Icon iconId={"sass"} width={"120"} height={"120"}/>
                    <Icon iconId={"react"} width={"120"} height={"120"}/>
                </S.StackIcons>

            </ContainerWrapper>
        </S.Stack>
    );
};