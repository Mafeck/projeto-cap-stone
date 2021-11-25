import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-color: var(--black);
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;

   

  div {
    min-width: 80%;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  img {
    cursor: pointer;
    width: 69px;
    height: 29px;
  }
  svg {
    width: 31px;
    height: 19px;
    color: var(--white);
  }
  .desktop {
    display: none;
  }
  
  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
    
    .desktop {
      display: flex;
      justify-content: space-between;
      width: 90%;
      .menu {
        display: flex;
        min-width: 560px;
        a {
          color: var(--white);
          opacity: 0.5;
        }
      }
    }
  }
`;

export const HeaderMenu = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  position: fixed;
  top: 0;
  z-index: 10;

  .menu {
    display: flex;
    flex-direction: column;
    height: 258px;
    justify-content: space-evenly;
    margin: 30px 0 0 30px;
  }

  a {
    color: var(--white);
    opacity: 0.5;
  }

  .menu {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInRight {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInRight {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
`;
