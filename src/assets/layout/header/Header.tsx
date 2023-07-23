import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const menuDataItems = ["Кейсы", "Опыт", "CV", "Отзывы", "Контакты"];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuData={menuDataItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 50px 200px;
`