import React from 'react';
import styled from "styled-components";
import mapPath from "../../images/map.webp"
import {SectionTitle} from "../../components/SectionTitle";

export const Expirience = () => {
    return (
        <StyledExpirience>
            <div>
                <SectionTitle>
                    Более 10 лет опыта в области интерактивного дизайна и работы с талантливыми людьми в бизнесе
                </SectionTitle>
                <Pic src={mapPath}/>
            </div>
        </StyledExpirience>
    );
};

const StyledExpirience = styled.section`
  min-height: 600px;
  padding: 100px 200px;

  div {
    background-color: #181818;
    overflow: hidden;
    padding: 40px;
    border-radius: 24px;
  }
`

const Pic = styled.img`
  width: 1392px;
  height: 380px;
`
