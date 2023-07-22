import React from 'react';
import styled from "styled-components";

export const Cover = () => {
    return (
        <StyledCover>
            <h1>Дизайнер <span>разнорабочий</span></h1>
            <p>— Ориентируюсь на создание высококачественных и впечатляющих цифровых продуктов</p>
            <div>
                <button>q123</button>
                <button>q123</button>
            </div>
        </StyledCover>
    );
};

const StyledCover = styled.div`
  background-color: #ddd;
  height: 800px;
  padding: 100px 200px;
`