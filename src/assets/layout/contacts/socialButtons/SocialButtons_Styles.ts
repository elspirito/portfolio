import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const SocialButton = styled.div`
    ul li {
      display: flex;
    }
`
const Button = styled.a`
  background-color: ${theme.colors.dark.tertiaryBg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 50%;

  &:hover {
    background-color: ${theme.colors.dark.accent.hover};
  }
`

export const S = {
    SocialButton,
    Button
}