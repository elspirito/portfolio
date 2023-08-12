import React from 'react';
import {Button} from "../../components/button/Button";
import deer from "../../images/deer.webp";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {S} from '../main/Main_Styled';

export const Main: React.FC = () => {
    return (
        <S.Main id={"main"}>
            <ContainerWrapper>
                <S.MainWrapper>
                    <S.MainTitle>
                        Дизайнер <span>разнорабочий</span>
                    </S.MainTitle>

                    <S.MainDescription>
                        — Ориентируюсь на создание высококачественных
                        и впечатляющих цифровых продуктов
                    </S.MainDescription>

                    <S.MainActions>
                        <Button width={"100%"} variant={"primary"} label={"Поподробнее?"}/>
                        <Button width={"100%"} variant={"secondary"} label={"Обсудить проект"}/>
                    </S.MainActions>
                </S.MainWrapper>
            </ContainerWrapper>
            <S.Deer src={deer} alt={"Изображение оленя из стекла c летающими огоньками внутри"}/>
        </S.Main>
    );
};