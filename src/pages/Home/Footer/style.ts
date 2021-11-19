import styled from "styled-components";

export const FooterBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 20px 15px;
  background-color: var(--gray-100);
  flex-direction: column;
  height: 200px;
  
  p {
    font-size: 12px;
    width: 100%;
    height: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .icons {
    column-gap: 10px;
    color: var(--gray-0);
    display: flex;
    align-items: center;
  }

  @media (min-width: 769px) {
    justify-content: space-around;
  }
`;
