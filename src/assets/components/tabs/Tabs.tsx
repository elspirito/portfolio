import React from 'react';
import styled from "styled-components";

export const Tabs = (props: { tabsData: Array<string> }) => {
    return (
        <StyledTabs>
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
        </StyledTabs>
    );
};

const StyledTabs = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }
`