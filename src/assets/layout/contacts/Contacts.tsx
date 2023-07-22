import React from 'react';
import styled from "styled-components";

export const Contacts = () => {
    return (
        <StyledContacts>
            <h2>Контакты</h2>
            <StyledForm action="">
                <input type="text" placeholder={"Ваше имя"}/>
                <input type="text" placeholder={"Эл.почта"}/>
                <textarea name="" id="" placeholder={"Текст сообщения..."}></textarea>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  height: 600px;
  background-color: #ddd;
  padding: 100px 200px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`