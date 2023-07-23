import React from 'react';
import styled from "styled-components";
import {Tabs} from "../../components/tabs/Tabs";

const tabsDataItems = ["Кейсы", "Визуал", "Разработка"]

export const Works = () => {
    return (
        <StyledWorks>
            <Tabs tabsData={tabsDataItems}/>
            <div>projects</div>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  height: 600px;
  background-color: #eee;
  padding: 100px 200px;
`