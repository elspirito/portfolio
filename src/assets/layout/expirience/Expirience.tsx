import React from 'react';
import styled from "styled-components";
import mapPath from "../../images/map.webp"
import {SectionTitle} from "../../components/SectionTitle";
import {theme} from "../../styles/Theme";

export const Expirience = () => {
    return (
        <StyledExpirience>
            <div>
                <SectionTitle>
                    Балабоба был создан в 2021 году для демонстрации
                    возможностей первой версии языковой модели YaLM
                    (Yet another Language Model).
                </SectionTitle>
                <Pic src={mapPath}/>
            </div>
        </StyledExpirience>
    );
};

const StyledExpirience = styled.section`

  div {
    background-color: ${theme.colors.dark.secondaryBg};
    overflow: hidden;
    padding: 40px;
    border-radius: 24px;
    max-width: 1440px;
    margin: 0 auto;
  }
`

const Pic = styled.img`
  width: 1392px;
  height: 380px;
`
