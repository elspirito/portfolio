import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../HeaderMenu_Styles'

export const Menu: React.FC<{menuData: Array<string>}> = (props: {menuData: Array<string>}) => {
    return (
        <ul role={'menu'} aria-label="Меню">
            {props.menuData.map(
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