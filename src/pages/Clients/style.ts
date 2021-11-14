import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Header = styled.div`
    width: 100%;
    max-width: 100%;
    background: var(--gray-100);
    height: 86px;

    .frontBox {
        background: var(--color-primary);
        border-bottom-right-radius: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 0 15px;

        h1 {
            color: var(--white);
            line-height: 24px;
            font-weight: 600;
            font-size: 18px;

        }
    }
`;