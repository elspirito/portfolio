import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Mixins";

const Stack = styled.section`
`
const Directions = styled.div`
  border-bottom: 2px solid ${theme.colors.dark.tertiaryBg};
  padding-bottom: 100px;
  margin-bottom: 100px;
`
const BigText = styled.p`
  ${font({weight: 1000, Fmax: 192, Fmin: 46, lineHeight: 1.1, color: "#333"})};
  text-transform: uppercase;
  text-align: right;
`
const StackIcons = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.dark.fontSecondary};
`

export const S = {
    Stack,
    Directions,
    BigText,
    StackIcons
}