import React from 'react';
import {S} from '../Works_Styles'

type workProsType = {
    src: string
    title: string
    text: string
}

export const Work = (props: workProsType) => {
    return (
        <S.Work>
            <S.Preview src={props.src}/>
            <S.Info>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.text}</S.Description>
            </S.Info>
        </S.Work>
    );
};