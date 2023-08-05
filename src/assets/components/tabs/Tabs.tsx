import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Mixins";

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
    ${font({weight: 1000, Fmax: 64, Fmin: 24})};
    margin-bottom: 40px;
    
    &:hover {
      color: ${theme.colors.dark.accent.base};
    }
  }
`