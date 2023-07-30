import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

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
  a {
    font-size: 64px;
    margin-bottom: 40px;
    font-weight: 900;
    
    &:hover {
      color: ${theme.colors.dark.accent};
    }
  }
`