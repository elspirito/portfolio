import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;

  &:hover {
    color: ${theme.colors.dark.accent.base};
  }
`
const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0 24px 0 0;
`
const Name = styled.h3`
  font-size: 24px;
  font-weight: 1000;
`
const Disclaimer = styled.div`
  display: flex;
  gap: 8px;

  small {
    font-size: 12px;
    font-weight: 300;
    opacity: 0.5;;
  }
`

export const S = {
    Logo,
    Avatar,
    NameWrapper,
    Name,
    Disclaimer
}