import styled from "styled-components";

interface ContainerProps {
  isLast: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 90%;
  max-width: 390px;
  height: 75px;
  display: flex;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: ${(props) => (props.isLast ? "0px" : "20px")};
  
  ::-webkit-scrollbar {
        display: none;
        }

  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes pulse {
  0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  50% {
  -webkit-transform: scale3d(1.05, 1.05, 1.05);
  transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  }
  @keyframes pulse {
  0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  50% {
  -webkit-transform: scale3d(1.05, 1.05, 1.05);
  transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  } 

  .divImage {
    background: var(--color-primary);
    width: 78px;
    height: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 78px;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;

    h3 {
      font-weight: 600;
    }

    p {
      color: var(--gray-50);
      font-size: 12px;
      font-weight: 500;
    }
  }
`;
