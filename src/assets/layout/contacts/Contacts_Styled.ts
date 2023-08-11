import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Contacts = styled.section`
    
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 80px;
`
const Field = styled.input`
  min-height: 80px;
  width: 100%;
  transition: ${theme.animation.transition};
`


export const S = {
    Contacts,
    Form,
    Field
}