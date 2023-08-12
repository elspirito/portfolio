import styled from "styled-components";

const Reviews = styled.section`
`
const Review = styled.p`
  padding-bottom: 100px;
`
const ReviewTabs = styled.div`
  display: flex;
  margin-bottom: 80px;
  gap: 16px;
`
const UserName = styled.div`

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
`


export const S = {
    Reviews,
    Review,
    ReviewTabs,
    ReviewTab,
    Avatar,
    Author,
    UserName
}