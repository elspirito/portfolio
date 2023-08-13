import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {motion} from "framer-motion";

const Expirience = styled(motion.section)`
  background-color: ${theme.colors.dark.secondaryBg};
`
const ExpirienceWrapper = styled.div`

  overflow: hidden;
  padding: 64px;
  border-radius: 24px;
  max-width: 1520px;
  margin: 0 auto;

  span {
    color: ${theme.colors.dark.accent.base};
  }
`
const SkillMap = styled.img`
  max-width: 1392px;
`

export const S = {
    Expirience,
    ExpirienceWrapper,
    SkillMap
}