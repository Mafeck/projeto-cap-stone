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

export const ImageBox = styled.div`
  @media (min-width: 769px) {
    margin-right: 15vw;
  }
`;
