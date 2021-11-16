import styled from "styled-components";

export const Image = styled.img`
  width: 170px;
  z-index: 10;
  box-shadow: -10px 10px 0px 0px var(--color-secondary);

  @media (min-width: 1000px) {
    width: 260px;
  }
`;

export const Container = styled.div`
 
  width: 270px;
  width: 10vw;
  z-index: 0;
`;

// export const GreenBox = styled.div`
//   position: absolute;
//   width: 110px;
//   height: 90px;
//   background-color: var(--color-secondary);
//   right: -28px;
//   top: 35px;
//   z-index: 2;

//   @media (min-width: 1000px) {
//     width: 180px;
//     height: 150px;
//     right: -40px;
//     top: 30px;
//   }
// `;
