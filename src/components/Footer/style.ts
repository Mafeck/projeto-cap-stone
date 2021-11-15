import styled from 'styled-components';

export const Container = styled.div`
    height: 40px;
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
`;
