import styled from "styled-components";
import backgroundImage from "../../assets/backgroundHome.jpg";

export const TitleBox = styled.div`
  margin-top: 60px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 80px 15px;
  background-attachment: fixed;
  background-repeat: no-repeat;

  .content {
    @media (min-width: 769px) {
      margin: 0 0 0 60px;
      width: 500px;
    }
  }

  h1 {
    margin-bottom: 12px;
    line-height: 1;
  }
`;

export const AboutUsBox = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 80px 15px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  z-index: 0;

  ::before {
    background-color: rgba(0, 0, 0, 0.5);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .content {
    @media (min-width: 769px) {
      width: 500px;
      margin: 0 0 0 60px;
    }
  }

  h1 {
    margin-bottom: 20px;
  }
  p {
    color: var(--gray-50);
  }
`;
