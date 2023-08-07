import styled from "styled-components";
import {font} from "../../styles/Mixins";
import {theme} from "../../styles/Theme";

const Main = styled.section`
  padding: 0;
`
const MainWrapper = styled.div`
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 40px;
`
const MainTitle = styled.h1`
  ${font({Fmin: 36, Fmax: 120})};
  width: 100%;

  span {
    display: block;
    text-align: center;
  }
`
const MainDescription = styled.blockquote`
  font-weight: 300;
  color: ${theme.colors.dark.fontSecondary};
`
const MainActions = styled.div`
  display: flex;
  gap: 40px;

  @media ${theme.media.medium} {
    flex-wrap: wrap;
  }
`
const Deer = styled.img`
  height: 42vh;
  width: 33vw;
  position: absolute;
  border-radius: 999px 0 0 999px;
  top: 200px;
  right: 0;
  z-index: -1;
  object-fit: none;
`

export const S = {
    Main,
    MainWrapper,
    MainTitle,
    MainDescription,
    MainActions,
    Deer
}