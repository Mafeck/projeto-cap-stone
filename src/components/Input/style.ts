import styled from "styled-components";

export const Container = styled.input`
  font-size: 14px;
  width: 95vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--gray-0);
  border: 2px solid var(--gray-0);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0px 15px;

  @media (min-width: 768px) {
    border: 2px solid #333333;
  }
`;
