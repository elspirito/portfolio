import React from 'react';
import iconSprite from '../../images/icon-sprite.svg';

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none"
             width={props.width || "24"}
             height={props.height || "24"}
             viewBox={props.viewBox || "0 0 24 24"}>
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
};
