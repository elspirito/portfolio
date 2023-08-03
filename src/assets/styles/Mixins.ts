import {theme} from "./Theme";

type fontPropsType = {
    weight?: number
    color?: string
    lineHeight?: number
    Fmax?: number
    Fmin?: number
}

export const font = ({weight, color, lineHeight, Fmin, Fmax}: fontPropsType) => `
    font-weight: ${weight || 1000};
    color: ${color || theme.colors.dark.fontPrimary};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`