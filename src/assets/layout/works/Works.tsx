import React from 'react';
import styled from "styled-components";
import {Tabs} from "../../components/tabs/Tabs";
import {Work} from "./work/Work";
import gfPreview from "../../images/projects/gf-preview.webp"
import konsolPreview from "../../images/projects/konsol-preview.webp"
import lucrosPreview from "../../images/projects/lucros-preview.webp"
import sberPreview from "../../images/projects/sber-preview.webp"
import shb2Preview from "../../images/projects/shb2-preview.webp"
import shbPreview from "../../images/projects/shb-preview.webp"
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {Button} from "../../components/button/Button";
import {theme} from "../../styles/Theme";

const tabsDataItems = ["Кейсы", "Визуал", "Разработка"]

export const Works = () => {
    return (
        <StyledWorks>
            <ContainerWrapper>
                <WorkTabsWrapper>
                    <Tabs tabsData={tabsDataItems}/>
                    <Button variant={"secondary"} label={"Все"} iconRight={"arrow-right"}/>
                </WorkTabsWrapper>

                <StyledWorksWrapper>
                    <Work src={gfPreview} className={"cell"} alt={"Проект Гудфин"}/>
                    <Work src={konsolPreview} className={"cell"} alt={"Проект Консоль"}/>
                    <Work src={lucrosPreview} className={"cell"} alt={"Проект Лукрос"}/>
                    <Work src={sberPreview} className={"cell"} alt={"Проект СБЕР"}/>
                    <Work src={shb2Preview} className={"cell"} alt={"Проект Сайт для Сервисхаба"}/>
                    <Work src={shbPreview} className={"cell"} alt={"Проект Сервисхаб"}/>
                </StyledWorksWrapper>

                <Paginator><span></span><span></span><span></span></Paginator>
            </ContainerWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  padding: 100px 0;
`
const StyledWorksWrapper = styled.div`
  .cell:nth-child(1) {
    grid-area: card1;
  }

  .cell:nth-child(2) {
    grid-area: card2;
  }

  .cell:nth-child(3) {
    grid-area: card3;
  }

  .cell:nth-child(4) {
    grid-area: card4;
  }

  .cell:nth-child(5) {
    grid-area: card5;
  }

  .cell:nth-child(6) {
    grid-area: card6;
  }
  
  
  gap: 40px;
  display: grid;
  //grid-template-columns: 10% 20% 10% 20% 20%;
  grid-template-areas:
    "card1 card1 card1 card2 card2 card3 card3"
    "card4 card4 card5 card5 card6 card6 card6";

  @media ${theme.media.medium} {
    grid-template-areas:
    "card1 card1 card1 card1 card2"
    "card3 card3 card4 card4 card4"
    "card5 card5 card5 card6 card6";
  }
`

const WorkTabsWrapper = styled.div`
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  gap: 40px;
`

const Paginator = styled.div`
  display: flex;
  gap: 16px;
  margin: 40px 0;
  align-items: center;
  justify-content: center;

  span {
    width: 8px;
    height: 8px;

    &:nth-child(1) {
      width: 24px;
    }
  }
`


