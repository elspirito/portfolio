import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Mixins";

const Works = styled.section`
  padding: 100px 0;
`
const WorkTabsWrapper = styled.div`
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  gap: 40px;
  overflow: auto;
`
const Tabs = styled.nav`
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
const Work = styled.div`
  display: flex;
  flex-direction: column;
`
const Preview = styled.img`
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`
const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: center;
  min-height: 40px;
`
const Title = styled.h3`
  display: inline;
  font-size: 24px;
  margin-right: 24px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    background-color: #F1E2FF;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    right: -15px;
  }
`
const Description = styled.p`
  padding: 4px 0 0 0;
  display: inline;
  font-size: 16px;
`
const TabLink = styled.a<{ active?: boolean }>`
  ${font({weight: 1000, Fmax: 64, Fmin: 24})};
  background-color: transparent;
  font-family: 'Roboto Flex', sans-serif;
  color: ${theme.colors.dark.fontPrimary};
  cursor: pointer;
  border: 0;
  transition: ${theme.animation.transition};

  &:hover {
    color: ${theme.colors.dark.accent.base};
  }

  ${props => props.active && css<{ active?: boolean }>`
    color: ${theme.colors.dark.accent.base};
  `}
`

export const S = {
    WorkTabsWrapper,
    Tabs,
    Works,
    Work,
    Preview,
    Info,
    Title,
    Description,
    TabLink
}