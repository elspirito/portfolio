import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Expirience = styled.section`

`
const ExpirienceWrapper = styled.div`
  background-color: ${theme.colors.dark.secondaryBg};
  overflow: hidden;
  padding: 64px;
  border-radius: 24px;
  max-width: 1440px;
  margin: 0 auto;
  
  span{
    color: ${theme.colors.dark.accent.base};
  }
`
const SkillMap = styled.img`
  width: 1392px;
`

export const S = {
    Expirience,
    ExpirienceWrapper,
    SkillMap
}