import React from 'react';
import mapPath from "../../images/map.webp"
import mapPath2x from "../../images/map_2x.webp"
import {SectionTitle} from "../../components/SectionTitle";
import {S} from '../expirience/Expirience_Styles';

export const Expirience: React.FC = () => {
    return (
        <S.Expirience>
            <S.ExpirienceWrapper>
                <SectionTitle>
                    <span>Более 10 лет опыта</span> в области интерактивного дизайна и работы с талантливыми людьми в
                    бизнесе
                </SectionTitle>
                <S.SkillMap src={mapPath} alt={"Схема хард скиллов"} srcSet={`${mapPath} 1x, ${mapPath2x} 2x`}/>
            </S.ExpirienceWrapper>
        </S.Expirience>
    );
};


