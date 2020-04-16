import React from 'react'
import { ThemeProvider } from 'styled-components'


const theme = {
    breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px"
    },
    containerMaxWidth: "1150px",
    colors: {
        green: "#04b962",
        black: "#383838",
        lightGray: "#7a7a7a",
        white: "#e0e0e0"
    }
};

export default theme;

export const themeProvider = function (Component) {
    return props => (
        <ThemeProvider theme={theme}>
            <Component {...props} />
        </ThemeProvider>
    )

}