import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    src: string
};

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork src={props.src}>

        </StyledWork>
    );
};

const StyledWork = styled.img`
  background-color: #333;
  min-height: 380px;
  width: 30%;
  object-fit: cover;
`

