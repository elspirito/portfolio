import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialButton} from "./social-button/SocialButton";


export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Контакты</SectionTitle>
            <StyledForm action="">
                <Field placeholder={"Ваше имя"}/>
                <Field placeholder={"Эл.почта"}/>
                <Field as={"textarea"} placeholder={"Текст сообщения..."}/>
                <Button type={"submit"}>Отправить</Button>
            </StyledForm>
            <FlexWrapper gap={"40px"}>
                <SocialButton iconId={"tg"} socialLink={"231"}/>
                <SocialButton iconId={"vk"} socialLink={"231321"}/>
                <SocialButton iconId={"github"} socialLink={"2312312"}/>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: #333;
  padding: 100px 200px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const Field = styled.input`
  min-height: 80px;
`