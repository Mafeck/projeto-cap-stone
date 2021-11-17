import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-color: var(--black);
<<<<<<< HEAD
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
=======
  width: 100vw;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;

>>>>>>> feature/people
  div {
    min-width: 80%;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
<<<<<<< HEAD
=======

>>>>>>> feature/people
  img {
    width: 69px;
    height: 29px;
  }
<<<<<<< HEAD
=======

>>>>>>> feature/people
  svg {
    width: 31px;
    height: 19px;
    color: var(--white);
  }
<<<<<<< HEAD
=======

>>>>>>> feature/people
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
<<<<<<< HEAD
      width: 90%;
      .menu {
        display: flex;
        min-width: 560px;
=======
      min-width: 90%;

      .menu {
        display: flex;
        min-width: 560px;

>>>>>>> feature/people
        a {
          color: var(--white);
          opacity: 0.5;
        }
      }
    }
  }
`;

export const HeaderMenu = styled.div`
<<<<<<< HEAD
  height: 735px;
  background-color: var(--black);
=======
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  position: fixed;
  top: 0;

>>>>>>> feature/people
  .menu {
    display: flex;
    flex-direction: column;
    height: 258px;
    justify-content: space-evenly;
    margin: 30px 0 0 30px;
  }
<<<<<<< HEAD
=======

>>>>>>> feature/people
  a {
    color: var(--white);
    opacity: 0.5;
  }
`;
