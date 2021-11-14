import styled from "styled-components";

export const Image = styled.img`
  width: 170px;
  position: absolute;

  @media (min-width: 1000px) {
    width: 260px;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 10vw;
`;

export const GreenBox = styled.div`
  position: absolute;
  width: 110px;
  height: 90px;
  background-color: var(--color-secondary);
  right: -7px;
  top: 30px;

  @media (min-width: 1000px) {
    width: 180px;
    height: 150px;
    right: -25px;
    top: 30px;
  }
`;
