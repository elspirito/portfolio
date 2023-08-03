import React from 'react';
import styled from "styled-components";
import mapPath from "../../images/map.webp"
import mapPath2x from "../../images/map_2x.webp"
import {SectionTitle} from "../../components/SectionTitle";
import {theme} from "../../styles/Theme";

export const Expirience = () => {
    return (
        <StyledExpirience>
            <ExpirienceWrapper>
                <SectionTitle>
                    <span>Более 10 лет опыта</span> в области интерактивного дизайна и работы с талантливыми людьми в
                    бизнесе
                </SectionTitle>
                <SkillMap src={mapPath} alt={"Схема хард скиллов"} srcSet={`${mapPath} 1x, ${mapPath2x} 2x`}/>
            </ExpirienceWrapper>
        </StyledExpirience>
    );
};

const StyledExpirience = styled.section`

`

const ExpirienceWrapper = styled.div`
  background-color: ${theme.colors.dark.secondaryBg};
  overflow: hidden;
  padding: 64px;
  border-radius: 24px;
  max-width: 1440px;
  margin: 0 auto;
  
  span{
    color: ${theme.colors.dark.accent.base};
  }
`

const SkillMap = styled.img`
  width: 1392px;
`
