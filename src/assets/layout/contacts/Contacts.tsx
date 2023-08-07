import React from 'react';
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {S} from '../contacts/Contacts_Styled';

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <ContainerWrapper>
                <SectionTitle>Контакты</SectionTitle>
                <S.Form action="">
                    <FlexWrapper gap={"40px"}>
                        <S.Field placeholder={"Ваше имя"} aria-placeholder={"Ваше имя"}/>
                        <S.Field placeholder={"Эл.почта"} aria-placeholder={"Эл.почта"}/>
                    </FlexWrapper>
                    <S.Field as={"textarea"} placeholder={"Текст сообщения..."} aria-placeholder={"Текст сообщения..."}/>
                    <Button variant={"primary"} label={"Отправить"} aria-label={"Отправить"} />
                </S.Form>
                <FlexWrapper gap={"24px"} justify={"center"}>
                    <Button variant={"tertirary"} iconLeft={"tg"} aria-label="Перейти в телеграм"/>
                    <Button variant={"tertirary"} iconLeft={"vk"} aria-label="Перейти во вконтакте"/>
                    <Button variant={"tertirary"} iconLeft={"github"} aria-label="Перейти в гитхаб"/>
                </FlexWrapper>
            </ContainerWrapper>
        </S.Contacts>
    );
};


