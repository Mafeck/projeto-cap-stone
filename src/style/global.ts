import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    
    :root {
        --color-primary: #212529;
        --color-primary-strong: #0C0D0E;
        --color-secondary: #6AB089;
        --color-secondary-light: #e1efe7;
        --gray-100: #111111;
        --gray-50: #878787;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;
        --white: #FFFFFF;
        --black: #000000;
        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
        --black: #000000;
        --white: #ffffff;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }
    
    border-list-style, input, button {
        /* font-family: ; */
        /* font-size: ; */
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Lexend Deca', sans-serif;
    }

    button {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        line-height: 19px;
        cursor: pointer;
    }

    input {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: 16px;
    }

    a {
        color: var(--color-secondary);
        text-decoration: none;
    }
`;
