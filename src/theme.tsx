import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        primary: "var(--color-primary-darker)",
        primaryLight: "var(--color-primary-lighter)",
        white: "var(--color-secondary)",
        hover: "var(--color-hover)"
    }
})
