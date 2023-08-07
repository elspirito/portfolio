import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "./menu/DesktopMenu";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./menu/MobileMenu";
import {S} from '../header/Header_Styles';

const menuDataItems = ["Кейсы", "Опыт", "CV", "Отзывы", "Контакты"];

export const Header = () => {
    return (
        <S.Header>
            <ContainerWrapper>
                <FlexWrapper direction={"row"} justify={"space-between"}>
                    <Logo/>
                    <DesktopMenu menuData={menuDataItems}/>
                    <MobileMenu menuData={menuDataItems}/>
                </FlexWrapper>
            </ContainerWrapper>
        </S.Header>
    );
};