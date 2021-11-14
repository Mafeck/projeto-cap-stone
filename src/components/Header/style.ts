import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-color: var(--black);
  width: 100vw;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  div {
    min-width: 80%;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
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
      min-width: 90%;
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
  height: 735px;
  background-color: var(--black);
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
`;
