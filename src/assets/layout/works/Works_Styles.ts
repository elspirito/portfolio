import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Mixins";

const Works = styled.section`
  padding: 100px 0;
`
const WorksWrapper = styled.div`
  .cell:nth-child(1) {
    grid-area: card1;
  }

  .cell:nth-child(2) {
    grid-area: card2;
  }

  .cell:nth-child(3) {
    grid-area: card3;
  }

  .cell:nth-child(4) {
    grid-area: card4;
  }

  .cell:nth-child(5) {
    grid-area: card5;
  }

  .cell:nth-child(6) {
    grid-area: card6;
  }


  gap: 40px;
  display: grid;
  //grid-template-columns: 10% 20% 10% 20% 20%;
  grid-template-areas:
    "card1 card1 card1 card2 card2 card3 card3"
    "card4 card4 card5 card5 card6 card6 card6";

  @media ${theme.media.medium} {
    grid-template-areas:
    "card1 card1 card1 card1 card2"
    "card3 card3 card4 card4 card4"
    "card5 card5 card5 card6 card6";
  }

  @media ${theme.media.small} {
    grid-template-areas:
    "card1"
    "card2"
    "card3"
    "card4"
    "card5"
    "card6";
  }
`
const WorkTabsWrapper = styled.div`
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  gap: 40px;
  
  @media ${theme.media.small} {
    overflow: auto;
    flex-wrap: wrap;
  }
`
const Paginator = styled.div`
  display: flex;
  gap: 16px;
  margin: 40px 0;
  align-items: center;
  justify-content: center;

  span {
    width: 8px;
    height: 8px;

    &:nth-child(1) {
      width: 24px;
    }
  }
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

export const S = {
    Works,
    WorksWrapper,
    WorkTabsWrapper,
    Paginator,
    Tabs
}