import { ReactComponent as Dice } from "../../assets/dice.svg";
import { Container } from "./style";

interface CardClientsProps {
  name: string;
  cpf: string;
  id: number;
  onClick: () => void;
}

const CardClients = ({ name, cpf, id, onClick }: CardClientsProps) => {
  return (
    <Container onClick={onClick}>
      <div className="diceBackground">
        <Dice className="diceIcon" />
      </div>
      <div className="clientInfo">
        <h4>{name}</h4>
        <span>{cpf}</span>
      </div>
    </Container>
  );
};

export default CardClients;
