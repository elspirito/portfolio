import React from 'react';
import  {S} from '../Works_Styles'

export const WorkTabs = (props: { tabsItems: Array<{title:string, status: "case" | "visual" | "dev"}> }) => {
    return (
        <S.Tabs>
            <ul>
                {props.tabsItems.map(
                    (t, index) => {
                        return (
                            <li key={index}>
                                <a href="">{t.title}</a>
                            </li>
                        )
                    }
                )}
            </ul>
        </S.Tabs>
    );
};