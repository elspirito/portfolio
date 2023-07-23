import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    gap?: string
    wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"} ;
  justify-content: ${props => props.gap || "flex-start"} ;
  align-items: ${props => props.gap || "center"} ;
  gap: ${props => props.gap || "0px"} ;
  flex-wrap: ${props => props.wrap || "nowrap"} ;
`