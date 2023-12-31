import React from 'react';
import avatar from "../../images/avatar.webp";
import {S} from '../logo/Logo_Styles';
import {animateScroll as scroll} from 'react-scroll';

export const Logo: React.FC = () => {
    return (
        <S.Logo onClick={scroll.scrollToTop}  aria-label="На главную">
            <S.Avatar src={avatar} alt={"Савинов Артем"}/>
            <S.NameWrapper>
                <S.Disclaimer>
                    <small>Дизайнер</small>
                    <small>Разработчик</small>
                    <small>Фантазер</small>
                </S.Disclaimer>
                <S.Name>
                    Савинов Артем
                </S.Name>
            </S.NameWrapper>
        </S.Logo>
    );
};