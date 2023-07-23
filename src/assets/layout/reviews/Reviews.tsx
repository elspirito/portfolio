import React from 'react';
import styled from "styled-components";
import {Review} from "./review/Review";
import {ReviewsTabs} from "./reviews-tabs/ReviewsTabs";

export const Reviews = () => {
    return (
        <StyledReviews>
            <h2>Отзывы клиентов</h2>
            <ReviewsTabs/>
            <Review/>
        </StyledReviews>
    );
};

const StyledReviews = styled.section`
  height: 600px;
  background-color: #999;
  padding: 100px 200px;
`
