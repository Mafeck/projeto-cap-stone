import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-primary-strong);
  width: 100vw;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 3;
  padding: 0 2%;

  h1 {
    color: var(--gray-0);
  }
`;

export const UserPerfil = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;

  h2 {
    color: var(--gray-20);
    font-size: 12px;
    font-weight: 400;
    margin-right: 5px;
  }

  .perfil {
    background: var(--gray-0);
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    .perfil--1 {
      background: var(--gray-20);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-top: 7px;
    }

    .perfil--2 {
      background: var(--gray-20);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      bottom: 12px;
      z-index: 0;
    }
  }
`;

export const PerfilOptions = styled.div`
  background: var(--color-primary);
  width: 210px;
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 55px;
  right: 10px;
  border-radius: 5px;

  .editPerfil {
    background: #d8f3dc;
    cursor: pointer;
    width: 95%;
    height: 55px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin: 5px 0;
    padding: 0 5px;

    .divIcon {
      background: var(--gray-0);
      color: var(--gray-50);
      font-size: 24px;
      width: 50px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      margin-right: 10px;
    }

    main {
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding: 5px 0;

      h6 {
        font-size: 13px;
        font-weight: 600;
      }

      span {
        color: var(--gray-50);
        text-align: start;
        font-size: 10px;
      }
    }
  }

  .logout {
    background: #ffdcc2;
    cursor: pointer;
    width: 95%;
    height: 55px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 0 5px;

    .divIcon {
      background: var(--gray-0);
      color: var(--gray-50);
      font-size: 24px;
      width: 50px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      margin-right: 10px;
    }

    main {
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding: 5px 0;

      h6 {
        font-size: 13px;
        font-weight: 600;
      }

      span {
        color: var(--gray-50);
        text-align: start;
        font-size: 10px;
      }
    }
  }
`;
