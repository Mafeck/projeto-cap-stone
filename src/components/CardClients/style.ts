import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95%;
  max-width: 450px;
  height: 80px;
  padding: 15px 10px;
  cursor: pointer;

  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid var(--gray-0);

  .diceBackground {
    background-color: var(--color-secondary-light);
    padding: 10px;
    border-radius: 5px;
  }

  .diceIcon {
    height: 24px;
    width: 24px;
  }

  .clientInfo {
    margin-left: 10px;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    color: var(--gray-100);
  }

  span {
    font-size: 10px;
    line-height: 16px;
    color: var(--gray-50);
  }
`;
