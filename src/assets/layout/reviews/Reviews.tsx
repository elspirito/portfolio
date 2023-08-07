import React from 'react';
import {ReviewsTabs} from "./reviews-tabs/ReviewsTabs";
import {SectionTitle} from "../../components/SectionTitle";
import ava1 from "../../images/reviews/ava1.webp";
import ava2 from "../../images/reviews/ava2.webp";
import ava3 from "../../images/reviews/ava3.webp";
import ava4 from "../../images/reviews/ava4.webp";
import ava5 from "../../images/reviews/ava5.webp";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {S} from '../reviews/Reviews_Styles';

const reviewAuthor = [
    {
        authorAvatar: ava1,
        authorName: "Иванов Иван"
    },
    {
        authorAvatar: ava2,
        authorName: "Сидоров Сидор"
    },
    {
        authorAvatar: ava3,
        authorName: "Сидоров Сидор"
    },
    {
        authorAvatar: ava4,
        authorName: "Сидоров Сидор"
    },
    {
        authorAvatar: ava5,
        authorName: "Сидоров Сидор"
    }
];

export const Reviews: React.FC = () => {
    return (
        <S.Reviews>
            <ContainerWrapper>
                <SectionTitle>Отзывы клиентов</SectionTitle>
                <ReviewsTabs author={reviewAuthor}/>
                <S.Review>
                    Балабоба демонстрирует, как с помощью нейросетей семейства YaLM можно продолжать тексты на любую тему,
                    сохраняя связность и заданный стиль. В основе Балабобы лежит первая версия YaLM, которая была
                    разработана в 2021 году для Поиска и Алисы. Подробнее можно почитать тут
                    У Балабобы нет своего мнения или знания. Он умеет только подражать — писать тексты так, чтобы они были
                    максимально похожи на реальные тексты из интернета.
                </S.Review>
            </ContainerWrapper>
        </S.Reviews>
    );
};
