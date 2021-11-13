import styled from "styled-components";

export const Container = styled.button`
  background: var(--color-primary);
  color: var(--gray-0);
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 5px;

  :hover {
    transition: 0.5s;
    background: var(--color-primary-strong);
  }

  :active {
    background: var(--color-primary);
  }
`;
