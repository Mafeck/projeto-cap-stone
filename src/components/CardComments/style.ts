import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    width: 95%;
    margin: 10px;
    border: 2px solid var(--gray-0);

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: var(--color-primary);
        margin-bottom: 10px;
    }

    p {
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: var(--gray-50);
        margin-bottom: 10px;
    }

    div {
        display: flex;
        justify-content: space-between;
    }
`;