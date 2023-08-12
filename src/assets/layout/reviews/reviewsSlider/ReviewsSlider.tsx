import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from '../Reviews_Styles'
import '../../../styles/slider.css'

type ReviewSlidePropsType = {
    text: string
    userName: string
}

export const ReviewSlide = (props: ReviewSlidePropsType) => {
    return (
        <>
            <S.Review>
                {props.text}
            </S.Review>
            <S.UserName>
                {props.userName}
            </S.UserName>
        </>


    )
}

const items = [
    <ReviewSlide
        text={"В Яндекс Браузере появился нейросетевой пересказ статей. Достаточно нажать на кнопку «Пересказать кратко», и YandexGPT (YaLM 2.0) обобщит главные мысли материала в виде тезисов, которые можно прочитать за 30-60 секунд. Переходить на сторонние сервисы не нужно: тезисы статьи отображаются прямо в интерфейсе браузера поверх открытой страницы, а ссылку на них можно отправить другим людям."}
        userName={`Альфа Банк`}
    />,
    <ReviewSlide
        text={"Для того, чтобы результат суммаризации передавал все важные мысли оригинального материала и был лаконичным, разработчики дополнительно обучили нейросеть YandexGPT с помощью особого набора данных. Это десятки тысяч пар больших текстов и их сокращённых версий. Их подготовили редакторы внутренней краудсорсинговой платформы Яндекса и AI-тренеры компании. Функция тезисного пересказа впервые появилась 27 июня на сервисе 300.ya.ru."}
        userName={`Сбербанк`}
    />,
    <ReviewSlide
        text={"YandexGPT умеет выделять главное в русскоязычных текстах длиной до 30 тысяч знаков. Для полного прочтения материала такого объёма обычно требуется 15-17 минут. Нейросетевой пересказ доступен в Яндекс Браузере для компьютеров (Windows, macOS, Linux) и смартфонов (iOS, Android). Узнать подробнее о том, как разработчики создавали технологию, можно в блоге Яндекса на Хабре."}
        userName={`ООО "Сервисхаб"`}
    />
];

export const ReviewsSlider = () => (
    <AliceCarousel
        mouseTracking
        items={items}
    />
);