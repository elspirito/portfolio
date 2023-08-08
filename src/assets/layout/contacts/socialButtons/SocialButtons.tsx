import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {S} from './SocialButtons_Styles'

export const SocialButtons: React.FC<{ socialItems: Array<Object> }> = (props: { socialItems: Array<Object> }) => {
    return (
        <S.SocialButton>
            <ul>
                <li>
                    {props.socialItems.map((s: any, index) => {
                            return (
                                <S.Button href={s.url}>
                                    <Icon iconId={s.icon}/>
                                </S.Button>
                            )
                        }
                    )}
                </li>
            </ul>
        </S.SocialButton>

    );
};
