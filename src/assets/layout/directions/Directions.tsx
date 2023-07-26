import React from 'react';
import styled from "styled-components";

export const Directions = () => {
    return (
        <StyledDirections>
            <h3>UIX</h3>
            <h3>3D</h3>
            <h3>Front-end</h3>
            <h3>Motion</h3>
        </StyledDirections>
    );
};

const StyledDirections = styled.section`
  padding: 100px 200px;
`