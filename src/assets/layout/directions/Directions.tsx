import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Directions = () => {
    return (
        <StyledDirections>
            <FlexWrapper gap={"40px"}>
                <BigText>UIX</BigText>
                <BigText>3D</BigText>
            </FlexWrapper>
            <BigText>Front-end</BigText>
            <BigText>Motion</BigText>
        </StyledDirections>
    );
};

const StyledDirections = styled.section`
  padding: 100px 200px;
`

const BigText = styled.p`
  font-size: 196px;
  font-weight: 900;
  text-transform: uppercase;
`