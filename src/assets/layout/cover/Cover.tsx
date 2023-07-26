import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/Button";
import deer from "../../images/deer.webp";

export const Cover = () => {
    return (
        <StyledCover>
            <CoverTitle>Дизайнер <span>разнорабочий</span></CoverTitle>

            <p>— Ориентируюсь на создание высококачественных и впечатляющих цифровых продуктов</p>

            <FlexWrapper gap={"40px"}>
                <Button>Подробнее</Button>
                <Button>Обсудить проект</Button>
            </FlexWrapper>

            <Deer src={deer}/>
        </StyledCover>
    );
};

const StyledCover = styled.section`
  min-height: 600px;
  padding: 100px 200px;
`
const CoverTitle = styled.h1`
  color: #fafafa;
  font-size: 120px;
  z-index: 10;
  position: relative;

  span {
    display: block;
    text-align: right;
  }
`
const Deer = styled.img`
  height: 400px;
  position: absolute;
  border-radius: 999px 0 0 999px;
  top: 300px;
  right: 0;
  z-index: 1;
  object-fit: none;
`