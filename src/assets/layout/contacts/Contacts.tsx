import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {ContainerWrapper} from "../../components/ContainerWrapper";

export const Contacts = () => {
    return (
        <StyledContacts>
            <ContainerWrapper>
                <SectionTitle>Контакты</SectionTitle>
                <StyledForm action="">
                    <FlexWrapper gap={"40px"}>
                        <Field placeholder={"Ваше имя"}/>
                        <Field placeholder={"Эл.почта"}/>
                    </FlexWrapper>
                    <Field as={"textarea"} placeholder={"Текст сообщения..."}/>
                    <Button variant={"primary"} label={"Отправить"}/>
                </StyledForm>
                <FlexWrapper gap={"40px"}>
                    <Button variant={"tertirary"} label={"el_spirito_santo"} iconLeft={"tg"}/>
                    <Button variant={"tertirary"} label={"el_spirito"} iconLeft={"vk"}/>
                    <Button variant={"tertirary"} label={"el_spirito"} iconLeft={"github"}/>
                </FlexWrapper>
            </ContainerWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 80px;
`
const Field = styled.input`
  min-height: 80px;
  width: 100%;
`