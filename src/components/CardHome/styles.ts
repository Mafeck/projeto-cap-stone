import styled from "styled-components";

export const Container = styled.div`
  width: 330px;
  height: 75px;
  display: flex;
  border-radius: 5px;
  margin: 10px auto;
  cursor: pointer;

  .divImage {
    background: var(--color-primary);
    width: 78px;
    height: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 78px;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;

    h3 {
      font-weight: 600;
    }

    p {
      color: var(--gray-50);
      width: 240px;
      font-size: 12px;
      font-weight: 500;
    }

  }
`;
