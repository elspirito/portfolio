import React from 'react';
import styled from "styled-components";

export const ReviewsTabs = () => {
    return (
        <StyledReviewTabs>
            <ReviewTab/>
            <ReviewTab/>
            <ReviewTab/>
            <ReviewTab/>
            <ReviewTab/>
        </StyledReviewTabs>
    );
};

const StyledReviewTabs = styled.div `
  display: flex;
`
const ReviewTab = styled.div `

`

