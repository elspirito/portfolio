import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../HeaderMenu_Styles'

const menuDataItems = ["Кейсы", "Опыт", "CV", "Отзывы", "Контакты"];

export const Menu: React.FC = () => {
    return (
        <ul role={'menu'} aria-label="Меню">
            {menuDataItems.map(
                (menuDataItems, index) => {
                    return (
                        <S.MenuItem role="menuitem" key={index}>
                            <Icon iconId={"star"}/>
                            <S.MenuLink href="">{menuDataItems}</S.MenuLink>
                        </S.MenuItem>
                    )
                }
            )}
        </ul>
    );
};