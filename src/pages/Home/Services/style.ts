import styled from "styled-components";

export const ServicesBox = styled.div`
  padding: 20px 15px;
  width: 100%;
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 50px;
  }

  h2 {
    margin-bottom: 20px;
  }
`;

export const ImageBox = styled.div`
  .desktopImage {
    display: none;
  }

  @media (min-width: 769px) {
    margin-right: 15vw;

    .desktopImage {
      display: block;
    }
  }
`;
