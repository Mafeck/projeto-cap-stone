import styled from 'styled-components';

export const Container = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary-strong);
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;

    button {
        border: none;
        background: none;

        svg {
            color: var(--gray-0);
        }
    }

    @media (min-width: 768px) {
        display: none;
    }
`;
