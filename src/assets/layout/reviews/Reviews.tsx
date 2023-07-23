import React from 'react';
import styled from "styled-components";
import {Review} from "./review/Review";
import {ReviewsTabs} from "./reviews-tabs/ReviewsTabs";
import {SectionTitle} from "../../components/SectionTitle";

export const Reviews = () => {
    return (
        <StyledReviews>
            <SectionTitle>Отзывы клиентов</SectionTitle>
            <ReviewsTabs/>
            <Review/>
        </StyledReviews>
    );
};

const StyledReviews = styled.section`
  min-height: 600px;
  background-color: #444;
  padding: 100px 200px;
`
