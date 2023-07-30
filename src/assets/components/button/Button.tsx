import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Icon} from "../icon/Icon";

type ButtonPropsType = {
    label: string
    iconLeft?: string
    iconRight?: string
    variant?: string
}

type StyledButtonPropsType = {
    styledVariant?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton>
            {props.iconLeft && <Icon iconId={props.iconLeft}/>}
            <Label>{props.label}</Label>
            {props.iconRight && <Icon iconId={props.iconRight}/>}
        </StyledButton>
    );
};

const StyledButton = styled.button<StyledButtonPropsType>`
  background-color: ${theme.colors.dark.accent};
  color: #fafafa;
  font-size: 24px;
  border: none;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`
const Label = styled.span`
  font-variation-settings: 'wght' 1000;
  font-variation-settings: 'opsz' 144;
`