import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    src: string
    className?: string
};

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork src={props.src} className={props.className}/>
    );
};

const StyledWork = styled.img`
  background-color: #333;
  min-height: 380px;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  border-radius: 24px;
  border: none;
`

