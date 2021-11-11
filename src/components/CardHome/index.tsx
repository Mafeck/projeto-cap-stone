import { Container } from "./styles";

interface CardHomeProps {
  title: string;
  image?: string;
  description: string;
  onClick: () => void;
}

const CardHome = ({ title, image, description, onClick }: CardHomeProps) => {
  return (
    <Container onClick={onClick}>
      <div className="divImage">
        <img src={image} alt="card image" />
      </div>
      <main>
        <h3>{title}</h3>
        <p>{description}</p>
      </main>
    </Container>
  );
};

export default CardHome;
