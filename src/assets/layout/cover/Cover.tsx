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
                <CoverMain>
                    <CoverTitle>
                        Дизайнер <span>разнорабочий</span>
                    </CoverTitle>

                    <CoverDescription>
                        Балабоба был создан в 2021 году для демонстрации
                        возможностей первой версии языковой модели YaLM
                        (Yet another Language Model).
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
  min-height: 80vh;
  padding-bottom: 0;
`

const CoverMain = styled.div`

`

const CoverTitle = styled.h1`
  color: #fafafa;
  font-size: 128px;
  margin-bottom: 40px;

  span {
    display: block;
    text-align: right;
  }
`
const CoverDescription = styled.p`
  margin-bottom: 120px;
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