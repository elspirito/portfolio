import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Icon} from "../icon/Icon";

type ButtonPropsType = {
    width?: string
    label?: string
    iconLeft?: string
    iconRight?: string
    variant?: string
}

type StyledButtonPropsType = {
    styledVariant?: string
    styledWidth?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton styledVariant={props.variant} styledWidth={props.width}>
            {props.iconLeft && <Icon iconId={props.iconLeft}/>}
            {props.label}
            {props.iconRight && <Icon iconId={props.iconRight}/>}
        </StyledButton>
    );
};

const StyledButton = styled.button<StyledButtonPropsType>`
  background-color: ${(props) => {
    switch (props.styledVariant) {
      case "primary":
        return theme.colors.dark.accent.base;
        break;
      case "secondary":
        return "transparent";
        break;
      default:
        return theme.colors.dark.tertiaryBg;
        break;
    }
  }};
  border: 2px solid ${(props) => {
    switch (props.styledVariant) {
      case "primary":
        return "transparent";
        break;
      case "secondary":
        return theme.colors.dark.accent.base;
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
  justify-content: center;
  min-width: 80px;
  width: ${(props) => props.styledWidth};
  border-radius: 999px;
  min-height: 80px;
  font-weight: 300;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.dark.accent.hover};
  }
`
