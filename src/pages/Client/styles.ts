import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;



  .erro {
    color: var(--negative);
    font-size: 10px;
    padding-left: 5px;
  }

  nav {
    background: var(--color-primary);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .containerNav {
      height: 82px;
      display: flex;
      align-items: center;

      .divAction {
        font-family: "Poppins", sans-serif;
        color: var(--white);
        cursor: pointer;
        width: 30px;
        font-size: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .divIcon {
        background: rgba(63, 191, 127, 0.15);
        color: var(--color-secondary);
        font-size: 24px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-right: 10px;
      }

      .client__name {
        color: var(--white);
        font-size: 20px;
      }
    }

    a {
      font-size: 24px;
      margin-left: 20px;
      padding-right: 10px;
    }

    @media (min-width: 768px) {
      height: 100px;
    }
  }

  textarea {
    width: 100%;
    height: 200px;
    border: 2px solid black;
    border-radius: 5px;
    resize: none;
    padding: 10px 10px 20px 10px;
  }
`;

export const ContentInfo = styled.div`
  background: var(--white);
  width: 100vw;
  max-width: 420px;
  height: 138px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;

  .itemInfo {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      font-weight: 500;
    }

    span + span {
      color: var(--gray-50);
    }
  }

  @media (min-width: 768px) {
    border: 2px solid var(--gray-20);
    margin: 10px 0 0 10px;
  }

  @media (min-width: 1352px) {
    position: absolute;
    right: 100px;
    top: 100px;
  }
`;

export const CommentsContainer = styled.div`
  width: 100vw;
  max-width: 780px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  overflow-x: hidden;

  .comments__info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 10px;

    .comments__title {
      font-size: 18px;
      font-weight: 600;
    }

    .comment__button {
      background: black;
      color: var(--white);
      font-size: 14px;
      font-weight: 400;
      padding: 10px;
      cursor: pointer;
      border: none;
      border-radius: 5px;

      :hover {
        transition: 0.5s;
        background: var(--color-primary-strong);
      }

      :active {
        background: var(--color-primary);
      }
    }
  }

  .comments {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 50px;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1100px) {
    margin-left: 50px;
  }
`;
