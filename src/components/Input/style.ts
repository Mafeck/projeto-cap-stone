import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    font-size: 16px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 15px;
    background: var(--gray-0);
    border: 2px solid var(--gray-0);
    box-sizing: border-box;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    border: 2px solid #333333;
  }
`;
