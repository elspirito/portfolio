import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Reviews = styled.section`
`
const Review = styled.p`
  border-bottom: 2px solid ${theme.colors.dark.tertiaryBg};
  padding-bottom: 100px;
`
const ReviewTabs = styled.div`
  display: flex;
  margin-bottom: 80px;
  gap: 16px;
`
const ReviewTab = styled.div`
  background-color: #555;
  padding: 8px;
  color: #fafafa;
  border-radius: 999px;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 24px;
  font-weight: 300;
`
const Avatar = styled.img`
  border-radius: 50%;
`
const Author = styled.span`
 display: none; // Временно :)
`

export const S = {
    Reviews,
    Review,
    ReviewTabs,
    ReviewTab,
    Avatar,
    Author
}