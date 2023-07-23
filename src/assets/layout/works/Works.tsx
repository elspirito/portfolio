import React from 'react';
import styled from "styled-components";
import {Tabs} from "../../components/tabs/Tabs";
import {Work} from "./work/Work";
import goodfinPreview from "../../images/projects/goodfin-preview.webp"
import konsolPreview from "../../images/projects/konsol-preview.webp"
import lucrosPreview from "../../images/projects/lucros-preview.webp"
import sberPreview from "../../images/projects/sber-preview.webp"
import shb2Preview from "../../images/projects/shb2-preview.webp"
import shbPreview from "../../images/projects/shb-preview.webp"
import {SectionTitle} from "../../components/SectionTitle";

const tabsDataItems = ["Кейсы", "Визуал", "Разработка"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>
                <Tabs tabsData={tabsDataItems}/>
            </SectionTitle>

            <StyledWorksWrapper>
                <Work src={goodfinPreview}/>
                <Work src={konsolPreview}/>
                <Work src={lucrosPreview}/>
                <Work src={sberPreview}/>
                <Work src={shb2Preview}/>
                <Work src={shbPreview}/>
            </StyledWorksWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 600px;
  background-color: #444;
  padding: 100px 200px;
`
const StyledWorksWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`