import { Container } from "./styles";

interface CardDashboardProps {
  title: string;
  description: string;
  image: string;
  background: string;
  backgroundBall: string;
  height?: string;
}

const CardDashboard = ({
  title,
  description,
  image,
  background,
  backgroundBall,
  height = "140px",
}: CardDashboardProps) => {
  return (
    <Container style={{ backgroundColor: background, height: height }}>
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
