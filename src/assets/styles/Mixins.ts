import {theme} from "./Theme";

type fontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmax?: number
    Fmin?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: fontPropsType) => `
    font-family: ${family || 'Roboto Flex'};
    font-weight: ${weight || 1000};
    color: ${color || theme.colors.dark.fontPrimary};
    line-height: ${lineHeight || 1.6};
    font-size: calc( (100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`