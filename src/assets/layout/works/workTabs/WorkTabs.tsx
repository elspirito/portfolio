import React from 'react';
import  {S} from '../Works_Styles'

export const WorkTabs = (props: { tabsData: Array<string> }) => {
    return (
        <S.Tabs>
            <ul>
                {props.tabsData.map(
                    (tabsDataItems, index) => {
                        return (
                            <li key={index}>
                                <a href="">{tabsDataItems}</a>
                            </li>
                        )
                    }
                )}
            </ul>
        </S.Tabs>
    );
};