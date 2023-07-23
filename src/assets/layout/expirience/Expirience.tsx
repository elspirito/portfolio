import React from 'react';
import styled from "styled-components";
import mapPath from "../../images/map.webp"

export const Expirience = () => {
    return (
        <StyledExpirience>
            <div>
                <h2>
                    Более 10 лет опыта в области интерактивного дизайна и работы с талантливыми людьми в бизнесе
                </h2>
               <Pic src={mapPath}/>
            </div>
        </StyledExpirience>
    );
};

const StyledExpirience = styled.section`
  height: 600px;
  background-color: #ddd;
  padding: 100px 200px;
  div {
    background-color: #181818;
    overflow: hidden;
  }
`

const Pic = styled.img`
  width: 1392px;
  height: 380px;
`
