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
        <StyledButton styledVariant={props.variant}>
            {props.iconLeft && <Icon iconId={props.iconLeft}/>}
            <Label>{props.label}</Label>
            {props.iconRight && <Icon iconId={props.iconRight}/>}
        </StyledButton>
    );
};

const StyledButton = styled.button<StyledButtonPropsType>`
  background-color: ${(props) => {
    switch (props.styledVariant) {
      case "primary":
        return theme.colors.dark.accent;
        break;
      case "secondary":
        return "transparent";
        break;
      default:
        return theme.colors.dark.secondaryBg;
        break;
    }
  }};
  border: 2px solid ${(props) => {
    switch (props.styledVariant) {
      case "primary":
        return "transparent";
        break;
      case "secondary":
        return theme.colors.dark.accent;
        break;
      default:
        return "transparent";
        break;
    }
  }};
  color: #fafafa;
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`
const Label = styled.label`
`