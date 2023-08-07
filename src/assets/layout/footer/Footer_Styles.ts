import styled from "styled-components";
import {ContainerWrapper} from "../../components/ContainerWrapper";

const Footer = styled.footer`
  min-height: 300px;
  
  ${ContainerWrapper} {
    border-top: 2px solid #333;
    flex-direction: column;
    gap: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const S = {
    Footer
}