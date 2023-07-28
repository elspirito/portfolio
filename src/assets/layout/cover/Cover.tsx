import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/button/Button";
import deer from "../../images/deer.webp";
import {ContainerWrapper} from "../../components/ContainerWrapper";

export const Cover = () => {
    return (
        <StyledCover>
            <ContainerWrapper>
                <FlexWrapper direction={"column"} justify={"space-between"} align={"flex-start"}>

                    <CoverTitle>
                        Дизайнер <span>разнорабочий</span>
                    </CoverTitle>

                    <CoverDescription>
                        — Ориентируюсь на создание высококачественных и впечатляющих цифровых продуктов
                    </CoverDescription>

                    <FlexWrapper gap={"40px"}>
                        <Button label={"Поподробнее?"}/>
                        <Button label={"Обсудить проект"}/>
                    </FlexWrapper>

                </FlexWrapper>
            </ContainerWrapper>
            <Deer src={deer}/>
        </StyledCover>
    );
};

const StyledCover = styled.section`
  min-height: 80vh;
  border: 1px solid violet;
  padding: 0;
`
const CoverTitle = styled.h1`
  color: #fafafa;
  font-size: 120px;

  span {
    display: block;
    text-align: right;
  }
`
const CoverDescription = styled.p`

`

const Deer = styled.img`
  height: 400px;
  position: absolute;
  border-radius: 999px 0 0 999px;
  top: 300px;
  right: 0;
  z-index: -1;
  object-fit: none;
`