import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  background-color: ${theme.dark.colors.accent};
  color: #fafafa;
  font-size: 24px;
  border: none;
  font-weight: 900;
  
  &:hover {
    cursor: pointer;
  }
  
  &:active {
    
  }
`