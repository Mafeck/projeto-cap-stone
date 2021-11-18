import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .search {
    width: 90%;
    height: 50px;
    margin: 15px auto;
  }

  @media (min-width: 769px) {
    .search {
      width: 50%;
    }
  }

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
      margin-left: 5px;
    }

    svg {
      width: 75px;
    }

    .titleIconBox {
      display: flex;
      align-items: center;
    }

    .divAction {
      font-family: "Poppins", sans-serif;
      color: var(--white);
      cursor: pointer;
      width: 30px;
      font-size: 35px;
      display: flex;
      justify-content: center;
    }
  }
`;

export const ContainerClients = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 70px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
