import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/Button";

export const Cover = () => {
    return (
        <StyledCover>
            <CoverTitle>
                Пример <span>заголовка</span>
            </CoverTitle>
            <p>— Ориентируюсь на создание высококачественных и впечатляющих цифровых продуктов</p>
            <FlexWrapper gap={"40px"}>
                <Button>Подробнее</Button>
                <Button>Обсудить проект</Button>
            </FlexWrapper>


        </StyledCover>
    );
};

const StyledCover = styled.section`
  background-color: #444;
  min-height: 600px;
  padding: 100px 200px;
`
const CoverTitle = styled.h1 `
  color: #fafafa;
  font-size: 120px;
  span {
    display: block;
    text-align: right;
  }
`