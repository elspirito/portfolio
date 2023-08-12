import React from 'react';
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {S} from '../contacts/Contacts_Styled';
import {SocialButtons} from "./socialButtons/SocialButtons";

const socialItemsData = [
    {
        icon: "tg",
        url: "@el_spirito_santo"
    },
    {
        icon: "vk",
        url: "@el_spirito"
    },
    {
        icon: "github",
        url: "@el_spirito"
    }
]

export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={"contacts"}>
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
                    <SocialButtons socialItems={socialItemsData}/>
                </FlexWrapper>
            </ContainerWrapper>
        </S.Contacts>
    );
};




