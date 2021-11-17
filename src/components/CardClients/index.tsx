import { ReactComponent as Dice } from "../../assets/dice.svg";
import { Container } from "./style";
import api from '../../services/api';
import { useAuth } from "../../providers/Auth";
import { usePeople } from "../../providers/People";
import {ReactComponent as Delete} from '../../assets/trash.svg';
import { toast } from "react-toastify";

interface CardClientsProps {
  name: string;
  cpf: string;
  id: number;
  onClick: () => void;
}

const CardClients = ({ name, cpf, id, onClick }: CardClientsProps) => {
  const { token } = useAuth();
  const { people, setPeople } = usePeople()

  const deleteClient = (id: number) => {
    const newList = people.filter((item) => item.id !== id)
    api
      .delete(`/people/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((_) => {
        toast.success('Cliente deletado com sucesso')
        setPeople(newList)
      })
      .catch((_) => toast.error('Houve um erro'))
  }

  return (
    <Container>
      <div className='infosBox' onClick={onClick}>
        <div className="diceBackground">
          <Dice className="diceIcon" />
        </div>
        <div className="clientInfo">
          <h4>{name}</h4>
          <span>{cpf}</span>
        </div>
      </div>
      <button onClick={() => deleteClient(id)}>
        <Delete />
      </button>
    </Container>
  );
};

export default CardClients;
