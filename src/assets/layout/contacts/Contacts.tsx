import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Контакты</SectionTitle>
            <StyledForm action="">
                <FlexWrapper gap={"40px"}>
                    <Field placeholder={"Ваше имя"}/>
                    <Field placeholder={"Эл.почта"}/>
                </FlexWrapper>
                <Field as={"textarea"} placeholder={"Текст сообщения..."}/>
                <Button label={"Отправить"}/>
            </StyledForm>
            <FlexWrapper gap={"40px"}>
                <Button label={"el_spirito"} icon={"tg"}/>
                <Button label={"el_spirito"} icon={"vk"}/>
                <Button label={"el_spirito"} icon={"github"}/>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  padding: 100px 200px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`
const Field = styled.input`
  min-height: 80px;
  width: 100%;
`