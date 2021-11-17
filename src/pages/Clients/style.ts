import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleBox = styled.div`
  width: 100%;
  max-width: 100%;
  background: var(--gray-100);
  height: 75px;
  margin-top: 64px;

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

    svg {
      width: 75px;
    }
  }
`;

export const ContainerClients = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 70px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
