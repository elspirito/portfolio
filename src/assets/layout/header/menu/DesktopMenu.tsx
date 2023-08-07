import React from 'react';
import {Menu} from "./Menu";
import {S} from '../menu/Menu_Styles';

export const DesktopMenu: React.FC<{ menuData: Array<string> }> = (props: { menuData: Array<string> }) => {
    return (
        <S.DesktopMenu>
            <Menu menuData={props.menuData}/>
        </S.DesktopMenu>
    );
};