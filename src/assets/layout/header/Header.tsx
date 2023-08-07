import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "./menu/DesktopMenu";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./menu/MobileMenu";
import {S} from '../header/Header_Styles';

const menuDataItems = ["Кейсы", "Опыт", "CV", "Отзывы", "Контакты"];

export const Header = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1200;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <ContainerWrapper>
                <FlexWrapper direction={"row"} justify={"space-between"}>
                    <Logo/>
                    {width < breakpoint ?
                        <MobileMenu menuData={menuDataItems}/> :
                        <DesktopMenu menuData={menuDataItems}/> }

                </FlexWrapper>
            </ContainerWrapper>
        </S.Header>
    );
};