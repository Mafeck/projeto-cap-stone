import styled from "styled-components";
import backgroundImage from "../../assets/backgroundHome.jpg";

export const TitleBox = styled.div`
  margin-top: 60px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 50px 15px;
  color: var(--white);

  .content {
    @media (min-width: 769px) {
      height: 300px;
      width: 400px;
      margin: 20px 0 0 60px;
    }
  }

  h1 {
    margin-bottom: 12px;
    line-height: 1;
  }
`;

export const AboutUsBox = styled.div`
  background-color: var(--gray-100);
  color: var(--white);
  padding: 30px 15px;

  .content {
    @media (min-width: 769px) {
      height: 200px;
      width: 690px;
      margin: 20px 0 0 60px;
    }
  }

  h1 {
    margin-bottom: 20px;
  }
  p {
    color: var(--gray-50);
  }
`;
