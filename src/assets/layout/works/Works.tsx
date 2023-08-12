import React, {useState} from 'react';
import {TabsStatusPropsType, WorkTabs} from "./workTabs/WorkTabs";
import {Work} from "./work/Work";
import gfPreview from "../../images/projects/gf-preview.webp"
import konsolPreview from "../../images/projects/konsol-preview.webp"
import lucrosPreview from "../../images/projects/lucros-preview.webp"
import sberPreview from "../../images/projects/sber-preview.webp"
import shb2Preview from "../../images/projects/shb2-preview.webp"
import shbPreview from "../../images/projects/shb-preview.webp"
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {S} from '../works/Works_Styles'
import {FlexWrapper} from "../../components/FlexWrapper";
import {AnimatePresence, motion} from "framer-motion";


const tabsItemsData: Array<{ status: TabsStatusPropsType, title: string }> = [
    {
        title: "Кейсы",
        status: "case"
    },
    {
        title: "Визуал",
        status: "visual"
    },
    {
        title: "Разработка",
        status: "dev"
    },
];
const worksItemsData = [
    {
        id: 1,
        title: "Консоль.про",
        text: "Платформа автоматизации работы с СМЗ и ИП",
        src: konsolPreview,
        type: "case"
    },
    {
        id: 2,
        title: "Goodfin",
        text: "Единственная финансовая платформа",
        src: gfPreview,
        type: "case"
    },
    {
        id: 3,
        title: "Lucros",
        text: "Инвестиционная платформа",
        src: lucrosPreview,
        type: "case"
    },
    {
        id: 4,
        title: "ServiceHUB",
        text: "Сайт для разработчика финансовых IT-решений",
        src: shbPreview,
        type: "case"
    },
    {
        id: 5,
        title: "ServiceHUB",
        text: "Разработка брэндинга для выставки",
        src: shb2Preview,
        type: "visual"
    },
    {
        id: 6,
        title: "Сбербанк",
        text: "Иллюстрация для SberDevice",
        src: sberPreview,
        type: "visual"
    }
];

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("case");
    let filteredWorks = worksItemsData;

    if (currentFilterStatus === "case") {
        filteredWorks = worksItemsData.filter(work => work.type === "case")
    }
    if (currentFilterStatus === "visual") {
        filteredWorks = worksItemsData.filter(work => work.type === "visual")
    }
    if (currentFilterStatus === "dev") {
        filteredWorks = worksItemsData.filter(work => work.type === "dev")
    }

    function changeFilterStatus(value: TabsStatusPropsType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Works id={"works"}>
            <ContainerWrapper>
                <S.WorkTabsWrapper>
                    <WorkTabs tabsItems={tabsItemsData}
                              changeFilterStatus={changeFilterStatus}
                              currentFilterStatus={currentFilterStatus}/>
                    {/*<Button variant={"secondary"} label={"Все"} iconRight={"arrow-right"} width={"100%"}/>*/}
                </S.WorkTabsWrapper>

                <FlexWrapper wrap={"wrap"} gap={"40px"}>

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width: "480px", flexGrow: 1}}
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >
                                    <Work
                                        src={w.src}
                                        title={w.title}
                                        text={w.text}
                                        key={w.id}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>

            </ContainerWrapper>
        </S.Works>
    );
};