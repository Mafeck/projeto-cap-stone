import { Container } from "./styles";

interface CardHomeProps {
  title: string;
  image?: string;
  description: string;
  isLast?: boolean;
}

const CardHome = ({
  title,
  image,
  description,
  isLast = false,
}: CardHomeProps) => {
  return (
    <Container isLast={isLast}>
      <div className="divImage">
        <img src={image} alt="img" />
      </div>
      <main>
        <h3>{title}</h3>
        <p>{description}</p>
      </main>
    </Container>
  );
};

export default CardHome;
