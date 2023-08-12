import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../HeaderMenu_Styles'

const menuItemsData = [
    {
        title: "Кейсы",
        href: "works"
    },
    {
        title: "Опыт",
        href: "expirience"
    },
    {
        title: "Отзывы",
        href: "reviews"
    },
    {
        title: "Контакты",
        href: "contacts"
    }
]
export const Menu: React.FC = () => {
    return (
        <ul role={'menu'} aria-label="Меню">
            {menuItemsData.map(
                (item, index) => {
                    return (
                        <li role="menuitem" key={index}>
                            <S.MenuLink
                                activeClass="active"
                                to={item.href}
                                spy={true}
                                smooth={true}
                            >
                                <Icon iconId={"star"}/>
                                {item.title}
                            </S.MenuLink>
                        </li>
                    )
                }
            )}
        </ul>
    );
};