import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {ContainerWrapper} from "../../components/ContainerWrapper";
import {S} from '../footer/Footer_Styles';

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <ContainerWrapper>
                <Icon iconId={"spirito"} width={"75"} height={"48"} viewBox={"0 0 75 48"}/>
                <p>© 2023</p>
            </ContainerWrapper>
        </S.Footer>
    );
};