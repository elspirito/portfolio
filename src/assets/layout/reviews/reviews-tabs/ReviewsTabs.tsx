import React from 'react';
import {S} from '../Reviews_Styles';


export const ReviewsTabs = (props: { author: Array<object> }) => {
    return (
        <S.ReviewTabs>
            {
                props.author.map((current: any) => {
                    return (
                        <S.ReviewTab>
                            <S.Avatar width={"48px"} height={"48px"} src={current.authorAvatar} alt=""/>
                            <S.Author>{current.authorName}</S.Author>
                        </S.ReviewTab>
                    )
                })
            }
        </S.ReviewTabs>
    );
};

