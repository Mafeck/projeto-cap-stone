import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 450px;
  height: 80px;
  padding: 15px 10px;
  margin: 10px auto;
  border-radius: 5px;
  border: 1px solid var(--gray-0);

  .infosBox {
    width: 80%;
    display: flex;
    cursor: pointer;
  }

  .diceBackground {
    background-color: var(--color-secondary-light);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .diceIcon {
    height: 24px;
    width: 24px;
  }

  .clientInfo {
    display: flex;
    flex-direction: column;
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

  .trashButton {
    border: none;
    background: none;
  }

  .deleteClientModal {
    display: flex;
    width: 100%;
    justify-content: space-around;

    button {
      width: 30%;
      height: 50px;
    }
    
    
  }

  @media (min-width: 769px) {
    margin: 10px;
  }

`;
