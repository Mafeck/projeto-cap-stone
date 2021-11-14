import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  width: 95%;
  max-width: 380px;
  height: 620px;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin: 60px 0 20px 0;
  }

  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    input {
      margin-bottom: 15px;
    }
  }
`;
