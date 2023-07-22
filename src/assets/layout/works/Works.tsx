import React from 'react';
import styled from "styled-components";

export const Works = () => {
    return (
        <StyledWorks>
            <h2>Кейсы</h2>
            <div>projects</div>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  height: 600px;
  background-color: #eee;
  padding: 100px 200px;
`