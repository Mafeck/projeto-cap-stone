import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  max-width: 650px;
  height: 140px;
  display: flex;
  position: relative;
  border-radius: 5px;

  main {
    display: flex;
    width: 63%;
    flex-direction: column;
    padding: 0 5px 0 10px;
    z-index: 2;

    h2 {
      color: var(--gray-0);
      font-weight: 600;
      font-size: 20px;
      margin-top: 30px;
    }

    p {
      color: var(--gray-20);
      font-size: 12px;
      margin-top: 15px;
    }
  }

  .divImage {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 37%;
    border-radius: 5px;
    background-size: contain no-repeat;
    padding-bottom: 1px;
    z-index: 2;
    img {
      max-width: 100%;
    }
  }

  .divBall {
    position: absolute;
    width: 100%;
    height: 140px;
    border-radius: 5px;
    border-bottom-right-radius: 110%;
    z-index: 1;
    img {
      max-width: 100%;
    }
  }
`;
