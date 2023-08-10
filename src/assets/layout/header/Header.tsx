import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from '../header/Header_Styles';

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
                        <MobileMenu/> :
                        <DesktopMenu/> }

                </FlexWrapper>
            </ContainerWrapper>
        </S.Header>
    );
};