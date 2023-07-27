import React from 'react';
import styled from "styled-components";


export const ReviewsTabs = (props: { author: Array<object> }) => {
    return (
        <StyledReviewTabs>
            {
                props.author.map((current: any) => {
                    return (
                        <ReviewTab>
                            <Avatar width={"48px"} height={"48px"} src={current.authorAvatar} alt=""/>
                            <Author>{current.authorName}</Author>
                        </ReviewTab>
                    )
                })
            }
        </StyledReviewTabs>
    );
};

const StyledReviewTabs = styled.div`
  display: flex;
  margin-bottom: 40px;
`

const ReviewTab = styled.div`
  background-color: #555;
  padding: 8px 40px 8px 8px;
  margin-right: 24px;
  color: #fafafa;
  border-radius: 999px;
  display: flex;
  gap: 8px;
  align-items: center;
`
const Avatar = styled.img`
  border-radius: 50%;
`
const Author = styled.span`

`

