import React from 'react';
import {S} from '../menu/Menu_Styles';
import {Menu} from "./Menu";

export const MobileMenu: React.FC<{ menuData: Array<string> }> = (props: { menuData: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuWrapper isOpen={false}>
                <Menu menuData={props.menuData}/>
            </S.MobileMenuWrapper>

        </S.MobileMenu>

    );
};