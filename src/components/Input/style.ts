import styled from 'styled-components';

export const Container = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 15px;
    width: 100%;
    height: 40px;
    background: var(--gray-0);
    border: 2px solid var(--gray-0);
    box-sizing: border-box;
    border-radius: 8px;

    @media (min-width: 768px) {
        border: 2px solid #333333;
    }
`;