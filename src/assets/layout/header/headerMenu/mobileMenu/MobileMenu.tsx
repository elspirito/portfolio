import React, {useState} from 'react';
import {S} from '../HeaderMenu_Styles';
import {Menu} from "../menu/Menu";

export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    let onButtonClick = () => {setMenuIsOpen(!menuIsOpen)};

    return (
        <S.MobileMenu>

            <S.BurgerButton isOpen={menuIsOpen} onClick={onButtonClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuWrapper isOpen={menuIsOpen}>
                <Menu/>
            </S.MobileMenuWrapper>

        </S.MobileMenu>
    );
};