import React, {useRef} from 'react';
import mapPath from "../../images/map.webp"
import mapPath2x from "../../images/map_2x.webp"
import {SectionTitle} from "../../components/SectionTitle";
import {S} from '../expirience/Expirience_Styles';
import {useScroll, useTransform} from "framer-motion";

export const Expirience: React.FC = () => {

    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });
    const opacity = useTransform(scrollYProgress, [1, 0], [0, 1]);
    const scale = useTransform(scrollYProgress, [.1, 1], [.5, 1])

    return (
        <S.Expirience id={"expirience"}
                      ref={targetRef}
                      style={{scale}}
        >
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


