import styled from "styled-components";

export const RegisterClientStyled = styled.div`
  margin: 80px 5px 0 5px;

  .formClient {
    max-width: 600px;
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto;

    p,
    button {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 15px;
    }

    button {
      margin-top: 9px;
      margin-bottom: 100px;
      width: 90%;
      max-width: 350px;
    }

    span {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 768px) {
    text-align: center;

    .formDesktop {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      column-gap: 10%;
      margin: 0;
    }

    p {
      margin-top: 133px;
    }
  }
`;
