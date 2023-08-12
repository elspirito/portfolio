import React from 'react';
import {S} from './Reviews_Styles'
import {SectionTitle} from "../../components/SectionTitle";
import {ReviewsSlider} from "./reviewsSlider/ReviewsSlider";
import {ContainerWrapper} from "../../components/ContainerWrapper";


export const Reviews: React.FC = () => {
    return (
        <S.Reviews id={"reviews"}>
            <ContainerWrapper>
                <SectionTitle>Отзывы</SectionTitle>
                <ReviewsSlider/>
            </ContainerWrapper>
        </S.Reviews>
    );
};