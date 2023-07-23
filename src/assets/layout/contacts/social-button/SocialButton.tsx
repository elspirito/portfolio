import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

type SocialButtonPropsType = {
    iconId: string
    socialLink: string
}

export const SocialButton = (props: SocialButtonPropsType) => {
    return (
        <StyledSocialButton>
            <Icon iconId={props.iconId}/>
            <span>{props.socialLink}</span>
        </StyledSocialButton>
    );
};

const StyledSocialButton = styled.a `
  color: #fafafa;
  background-color: #111;
  padding: 40px 16px;
  width: 100%;
  
  &:hover {
    cursor: pointer;
  }
`