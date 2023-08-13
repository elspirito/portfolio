import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Reviews = styled.section`
  background-color: ${theme.colors.dark.secondaryBg};
`
const Review = styled.p`
  padding-bottom: 100px;
`
const UserName = styled.div`

`
const Avatar = styled.img`
  border-radius: 50%;
`
const Author = styled.span`
`


export const S = {
    Reviews,
    Review,
    Avatar,
    Author,
    UserName
}