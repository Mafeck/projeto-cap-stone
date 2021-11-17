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
