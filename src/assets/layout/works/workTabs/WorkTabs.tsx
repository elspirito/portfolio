import React from 'react';
import {S} from '../Works_Styles'

export type TabsStatusPropsType = "case" | "visual" | "dev"
type TabsPropsType = {
    tabsItems: Array<{ title: string, status: TabsStatusPropsType }>
    changeFilterStatus: (value: TabsStatusPropsType) => void
    currentFilterStatus: string
}
export const WorkTabs = (props: TabsPropsType) => {
    return (
        <S.Tabs>
            <ul>
                {props.tabsItems.map(
                    (t, index) => {
                        return (
                            <li key={index}>
                                <S.Link active={props.currentFilterStatus === t.status} as={"button"} onClick={() => {
                                    props.changeFilterStatus(t.status)
                                }}>{t.title}</S.Link>
                            </li>
                        )
                    }
                )}
            </ul>
        </S.Tabs>
    );
};