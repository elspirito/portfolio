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
                        <li role="menuitem" key={index}>
                            <S.MenuLink href="">
                                <Icon iconId={"star"}/>
                                {menuDataItems}
                            </S.MenuLink>
                        </li>
                    )
                }
            )}
        </ul>
    );
};