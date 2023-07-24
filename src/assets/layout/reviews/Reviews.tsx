import React from 'react';
import styled from "styled-components";
import {ReviewsTabs} from "./reviews-tabs/ReviewsTabs";
import {SectionTitle} from "../../components/SectionTitle";

export const Reviews = () => {
    return (
        <StyledReviews>
            <SectionTitle>Отзывы клиентов</SectionTitle>
            <ReviewsTabs/>
            <Review>
                Балабоба демонстрирует, как с помощью нейросетей семейства YaLM можно продолжать тексты на любую тему,
                сохраняя связность и заданный стиль. В основе Балабобы лежит первая версия YaLM, которая была
                разработана в 2021 году для Поиска и Алисы. Подробнее можно почитать тут
                У Балабобы нет своего мнения или знания. Он умеет только подражать — писать тексты так, чтобы они были
                максимально похожи на реальные тексты из интернета.
            </Review>
        </StyledReviews>
    );
};

const StyledReviews = styled.section`
  min-height: 600px;
  background-color: #444;
  padding: 100px 200px;
`

const Review = styled.p`

`
