import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {FlexWrapper} from "../../components/FlexWrapper";

const menuDataItems = ["Кейсы", "Опыт", "CV", "Отзывы", "Контакты"];

export const Header = () => {
    return (
        <StyledHeader>
            <ContainerWrapper>
                <FlexWrapper direction={"row"} justify={"space-between"}>
                    <Logo/>
                    <Menu menuData={menuDataItems}/>
                </FlexWrapper>
            </ContainerWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 50px 0;
`