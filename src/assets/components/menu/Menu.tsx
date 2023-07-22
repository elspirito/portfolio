import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Кейсы</a></li>
                <li><a href="">Опыт</a></li>
                <li><a href="">CV</a></li>
                <li><a href="">Отзывы</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
 ul {
   display: flex;
   gap: 32px;
 }
`