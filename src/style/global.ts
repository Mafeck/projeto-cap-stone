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
        --color-secondary-strong: #53886a;
        --gray-100: #111111;
        --gray-50: #878787;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;
<<<<<<< HEAD
        --white: #FFFFFF;
        --black: #000000;
=======
>>>>>>> 3a8337d442ffedce3bbc4816af25b210d242a97e
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
    
    h1 {
        font-size: 26px;
    }

    h2 {
        font-size: 22px;
    }

    h3 {
        font-size: 18px;
    }

    span {
        font-size: 14px;
        font-family: 'Lexend Deca', sans-serif;
    }

    p {
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
        /* color: ; */
        text-decoration: none;
    }
`;
