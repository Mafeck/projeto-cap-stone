import { Container } from "./styles";
import { useHistory } from "react-router-dom";

interface CardDashboardProps {
  title: string;
  description: string;
  image: string;
  background: string;
  backgroundBall: string;
  width?: string;
  height?: string;
  route: string;
}

const CardDashboard = ({
  title,
  description,
  image,
  background,
  backgroundBall,
  width = "95%",
  height = "140px",
  route,
}: CardDashboardProps) => {
  const history = useHistory();
  console.log(route);

  return (
    <Container onClick={() => history.push(`${route}`)}  style={{ backgroundColor: background, height: height, width: width }}>
      <main>
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
      <div className="divImage">
        <img src={image} alt="cardImage" />
      </div>
      <div
        className="divBall"
        style={{ backgroundColor: backgroundBall }}
      ></div>
    </Container>
  );
};

export default CardDashboard;
