import styled from "styled-components";

export const Image = styled.img`
  width: 170px;
  position: absolute;
  z-index: 10;

  @media (min-width: 1000px) {
    width: 260px;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 10vw;
  z-index: 0;
`;

export const GreenBox = styled.div`
  position: absolute;
  width: 110px;
  height: 90px;
  background-color: var(--color-secondary);
  right: -12px;
  top: 28px;
  z-index: 2;

  @media (min-width: 1000px) {
    width: 180px;
    height: 150px;
    right: -40px;
    top: 30px;
  }
`;
