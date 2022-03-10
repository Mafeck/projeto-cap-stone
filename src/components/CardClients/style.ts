import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 450px;
  height: 80px;
  padding: 15px 10px;
  margin: 10px auto;


  .infosBox {
    width: 80%;
    display: flex;
    cursor: pointer;
  }

  .diceBackground {
    background-color: var(--color-secondary-light);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .diceIcon {
    height: 24px;
    width: 24px;
  }

  .clientInfo {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    color: var(--gray-100);
  }

  span {
    font-size: 10px;
    line-height: 16px;
    color: var(--gray-50);
  }

  .trashButton {
    border: none;
    background: none;
  }

  .deleteClientModal {
    display: flex;
    width: 100%;
    justify-content: space-around;

    button {
      width: 30%;
      height: 50px;
    }
    
    
  }



`;


export const ContainerAux = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 450px;
  height: 80px;
  padding: 15px 10px;
  margin: 10px auto;
  border-radius: 5px;
  border: 1px solid var(--gray-0);
  
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
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
`