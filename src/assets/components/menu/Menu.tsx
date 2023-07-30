import React from 'react';
import styled from "styled-components";

export const Menu = (props: { menuData: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuData.map(
                    (menuDataItems, index) => {
                        return (
                            <li key={index}>
                                <a href="">{menuDataItems}</a>
                            </li>
                        )
                    }
                )}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
  }
  a {
    font-weight: 300;
  }
`