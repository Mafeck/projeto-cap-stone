import styled from "styled-components";

export const ServicesBox = styled.div`
  padding: 20px 15px;
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-top: 40px;
    margin-bottom: 50px;
  }

  h2 {
    margin-bottom: 20px;
  }
`;

export const BoxWidth = styled.div`
  width: 70vw;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
