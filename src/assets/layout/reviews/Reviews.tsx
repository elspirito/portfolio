import React from 'react';
import styled from "styled-components";

export const Reviews = () => {
    return (
        <StyledReviews>
            <h2>Отзывы клиентов</h2>
        </StyledReviews>
    );
};

const StyledReviews = styled.section`
  height: 600px;
  background-color: #eee;
  padding: 100px 200px;
`