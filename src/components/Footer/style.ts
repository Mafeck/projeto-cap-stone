import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;

    button {
        border: none;
        background: none;

        svg {
            color: #f5f5f5;
        }
    }
`;