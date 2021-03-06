import styled from "styled-components";

export const Container = styled.div`
  max-width: 650px;
  height: 140px;
  display: flex;
  position: relative;
  border-radius: 5px;
  cursor: pointer;

  ::-webkit-scrollbar {
        display: none;
        }

  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  @-webkit-keyframes fadeInLeft {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInLeft {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  } 

  main {
    display: flex;
    width: 63%;
    flex-direction: column;
    padding: 0 5px 0 10px;
    z-index: 2;

    h2 {
      color: var(--gray-0);
      font-weight: 600;
      font-size: 20px;
      margin-top: 10px;
    }

    p {
      color: var(--gray-20);
      font-size: 12px;
      margin-top: 15px;
    }
  }

  .divImage {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 37%;
    border-radius: 5px;
    background-size: contain no-repeat;
    padding-bottom: 1px;
    z-index: 2;
    img {
      max-width: 100%;
    }
  }

  .divBall {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border-bottom-right-radius: 110%;
    z-index: 1;
    img {
      max-width: 100%;
    }
  }
`;
