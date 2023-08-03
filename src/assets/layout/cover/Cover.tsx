import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/button/Button";
import deer from "../../images/deer.webp";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Mixins";

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

                    <CoverActions>
                        <Button variant={"primary"} label={"Поподробнее?"}/>
                        <Button variant={"secondary"} label={"Обсудить проект"}/>
                    </CoverActions>
                </CoverMain>
            </ContainerWrapper>
            <Deer src={deer} alt={"Изображение оленя из стекла c летающими огоньками внутри"}/>
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
  justify-content: space-evenly;
  gap: 40px;
`

const CoverTitle = styled.h1`
  ${font({weight: 1000, Fmin: 40, Fmax: 120})};
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
const CoverActions = styled.div`
  display: flex;
  gap: 40px;
  
  @media ${theme.media.medium} {
    flex-wrap: wrap;
  }
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