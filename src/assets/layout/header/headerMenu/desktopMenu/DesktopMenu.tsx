import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles';

export const DesktopMenu: React.FC<{ menuData: Array<string> }> = (props: { menuData: Array<string> }) => {
    return (
        <S.DesktopMenu>
            <Menu menuData={props.menuData}/>
        </S.DesktopMenu>
    );
};