import styled from "styled-components";

export const RegisterClientStyled = styled.div`
    margin: 80px 5px 0 5px;
    h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        margin-left: 5px;
    }
    .formClient {
        margin-top: 26px;
        display: flex;
        flex-direction: column;
        align-items: center;
        p, button {
            font-weight: 400;
            font-size: 14px;
            margin-bottom: 15px;
        }
        button {
            margin-top: 9px;
            margin-bottom: 100px;
            width: 68%;
            max-width: 350px;
        }
        span {
            margin-bottom: 15px;
        }
    }

    @media (min-width: 768px) {
        text-align: center;
        .formDesktop {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            column-gap: 10%;
        }
        p {
            margin-top: 133px;
        }
    }
`;