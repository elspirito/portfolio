import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/button/Button";
import deer from "../../images/deer.webp";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {theme} from "../../styles/Theme";

export const Cover = () => {
    return (
        <StyledCover>
            <ContainerWrapper>
                <CoverMain>
                    <CoverTitle>
                        Дизайнер <span>разнорабочий</span>
                    </CoverTitle>

                    <CoverDescription>
                        — Ориентируюсь на создание высококачественных
                        и впечатляющих цифровых продуктов
                    </CoverDescription>

                    <FlexWrapper gap={"40px"}>
                        <Button variant={"primary"} label={"Поподробнее?"}/>
                        <Button variant={"secondary"} label={"Обсудить проект"}/>
                    </FlexWrapper>
                </CoverMain>
            </ContainerWrapper>
            <Deer src={deer}/>
        </StyledCover>
    );
};

const StyledCover = styled.section`
  padding: 0;
`

const CoverMain = styled.div`
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 100px;
  //padding: 100px 0;
`

const CoverTitle = styled.h1`
  color: #fafafa;
  font-size: 128px;
  width: 100%;

  span {
    display: block;
    text-align: center;
  }
  
  
`
const CoverDescription = styled.blockquote`
    font-weight: 300;
  color: ${theme.colors.dark.fontSecondary};
`

const Deer = styled.img`
  height: 42vh;
  width: 33vw;
  position: absolute;
  border-radius: 999px 0 0 999px;
  top: 200px;
  right: 0;
  z-index: -1;
  object-fit: none;
`