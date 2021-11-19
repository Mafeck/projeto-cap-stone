import styled from "styled-components";

export const Container = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RegisterClientStyled = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inputs {
    max-height: 100%;
    margin: 26px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    div,
    p {
      width: 280px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 15px;
    }
  }

  button {
    margin-top: 9px;
    margin-bottom: 50px;
    width: 90%;
    max-width: 350px;
    font-weight: 400;
    font-size: 14px;
  }

  span {
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    .inputs {
      flex-direction: row;
      align-items: flex-start;
      column-gap: 10vw;
      .column {
        display: flex;
        flex-direction: column;
        height: 850px;
        justify-content: space-between;
      }
    }
  }
`;

export const TitleBox = styled.div`
  width: 100%;
  max-width: 100%;
  background: var(--color-secondary-strong);
  height: 75px;
  margin-top: 64px;

  .frontBox {
    background: var(--color-secondary);
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
