import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type StyledButtonPropsType = {
    styledVariant?: string
    styledWidth?: string
}

const Button = styled.button<StyledButtonPropsType>`
  ${props => props.styledVariant === "primary" && css<StyledButtonPropsType>`
    background-color: ${theme.colors.dark.accent.base};
  `};

  ${props => props.styledVariant === "secondary" && css<StyledButtonPropsType>`
    background-color: transparent;
  `};
  
  color: #fafafa;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  width: ${props => props.styledWidth};
  border-radius: 999px;
  border: 2px solid ${theme.colors.dark.accent.base};
  min-height: 80px;
  font-weight: 300;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.dark.accent.hover};
  }
`
export const S = {
    Button
}