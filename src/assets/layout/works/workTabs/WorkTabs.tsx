import React from 'react';
import {S} from '../Works_Styles'
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

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
                                <Link active={props.currentFilterStatus === t.status} as={"button"} onClick={() => {
                                    props.changeFilterStatus(t.status)
                                }}>{t.title}</Link>
                            </li>
                        )
                    }
                )}
            </ul>
        </S.Tabs>
    );
};

const Link = styled.a<{ active?: boolean }>`
  background-color: transparent;
  font-family: 'Roboto Flex', sans-serif;
  font-size: 64px;
  font-weight: 1000;
  color: ${theme.colors.dark.fontPrimary};
  cursor: pointer;
  border: 0;

  &:hover {
    color: ${theme.colors.dark.accent.base};
  }

  ${props => props.active && css<{ active?: boolean }>`
    color: ${theme.colors.dark.accent.base};
  `}
`