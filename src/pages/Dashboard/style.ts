import styled from "styled-components";

export const DashboardStyled = styled.div`
    .cards {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 300px;
    }

    @media (min-width: 768px) {
        .cards {
            flex-direction: row;
            align-items: flex-start;
            margin-left: 20px;
            margin-right: 20px;
            column-gap: 10px;
            justify-content: space-evenly;
        }
    }
`;