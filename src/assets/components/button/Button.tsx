import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Icon} from "../icon/Icon";

type ButtonPropsType = {
    icon?: string
    label: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton>
            {props.icon && <Icon iconId={props.icon}/>}
            <Label>{props.label}</Label>
        </StyledButton>
    );
};

const StyledButton = styled.button`
  background-color: ${theme.dark.colors.accent};
  color: #fafafa;
  font-size: 24px;
  border: none;
  font-weight: 900;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:active {

  }
`
const Label = styled.span`

`


// import styled from "styled-components";
// import {theme} from "../styles/Theme";
//
// export const Button = styled.button`
//   background-color: ${theme.dark.colors.accent};
//   color: #fafafa;
//   font-size: 24px;
//   border: none;
//   font-weight: 900;
//
//   &:hover {
//     cursor: pointer;
//   }
//
//   &:active {
//
//   }
// `