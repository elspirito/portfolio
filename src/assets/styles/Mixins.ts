import {theme} from "./Theme";

type fontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
}

export const font = ({family, weight, color, lineHeight}: fontPropsType) => `
    font-family: ${family || 'Roboto Flex'};
    font-weight: ${weight || 1000};
    color: ${color || theme.colors.dark.fontPrimary};
    line-height: ${lineHeight || 1.6};
`