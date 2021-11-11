import { ReactComponent as Dice } from "../../assets/dice.svg";
import { Container } from "./style";

interface CardClientsProps {
  name: string;
  cpf: string;
}

const CardClients = ({ name, cpf }: CardClientsProps) => {
  return (
    <Container>
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
