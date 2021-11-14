import styled from "styled-components";
import backgroundImage from "../../assets/backgroundHome.png";

export const TitleBox = styled.div`
  margin-top: 60px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 20px 15px;
  color: var(--white);

  h1 {
    margin-bottom: 12px;
  }
`;

export const AboutUsBox = styled.div`
  background-color: var(--gray-100);
  color: var(--white);
  padding: 30px 15px;

  h1 {
    margin-bottom: 20px;
  }
  p {
    color: var(--gray-50);
  }
`;
