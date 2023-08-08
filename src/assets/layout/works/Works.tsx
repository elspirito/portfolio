import React from 'react';
import {WorkTabs} from "./workTabs/WorkTabs";
import {Work} from "./work/Work";
import gfPreview from "../../images/projects/gf-preview.webp"
import konsolPreview from "../../images/projects/konsol-preview.webp"
import lucrosPreview from "../../images/projects/lucros-preview.webp"
import sberPreview from "../../images/projects/sber-preview.webp"
import shb2Preview from "../../images/projects/shb2-preview.webp"
import shbPreview from "../../images/projects/shb-preview.webp"
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {Button} from "../../components/button/Button";
import {S} from '../works/Works_Styles'

const tabsDataItems = ["Кейсы", "Визуал", "Разработка"]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <ContainerWrapper>
                <S.WorkTabsWrapper>
                    <WorkTabs tabsData={tabsDataItems}/>
                    <Button variant={"secondary"} label={"Все"} iconRight={"arrow-right"} width={"100%"}/>
                </S.WorkTabsWrapper>

                <S.WorksWrapper>
                    <Work src={gfPreview} className={"cell"} alt={"Проект Гудфин"}/>
                    <Work src={konsolPreview} className={"cell"} alt={"Проект Консоль"}/>
                    <Work src={lucrosPreview} className={"cell"} alt={"Проект Лукрос"}/>
                    <Work src={sberPreview} className={"cell"} alt={"Проект СБЕР"}/>
                    <Work src={shb2Preview} className={"cell"} alt={"Проект Сайт для Сервисхаба"}/>
                    <Work src={shbPreview} className={"cell"} alt={"Проект Сервисхаб"}/>
                </S.WorksWrapper>

                <S.Paginator>
                    <span></span><span></span><span></span>
                </S.Paginator>
            </ContainerWrapper>
        </S.Works>
    );
};


