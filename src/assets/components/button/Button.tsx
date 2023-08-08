import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './Button_Styles'

type ButtonPropsType = {
    width?: string
    label?: string
    iconLeft?: string
    iconRight?: string
    variant?: string
}

export const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
    return (
        <S.Button styledVariant={props.variant} styledWidth={props.width}>
            {props.iconLeft && <Icon iconId={props.iconLeft}/>}
            {props.label}
            {props.iconRight && <Icon iconId={props.iconRight}/>}
        </S.Button>
    );
};