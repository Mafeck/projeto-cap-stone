import styled from "styled-components";

export const FooterBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 15px;
  background-color: var(--gray-100);

  @media (min-width: 769px) {
    justify-content: space-around;
  }
`;
