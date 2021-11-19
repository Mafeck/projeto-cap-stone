import { ReactComponent as Dice } from "../../assets/dice.svg";
import { Container } from "./style";
import api from "../../services/api";
import { useAuth } from "../../providers/Auth";
import { usePeople } from "../../providers/People";
import { ReactComponent as Delete } from "../../assets/trash.svg";
import { toast } from "react-toastify";
import Modal from "../Modal";
import { useState } from "react";
import Button from "../Button";

interface CardClientsProps {
  name: string;
  cpf: string;
  id: number;
  area?: string;
  onClick: () => void;
}

const CardClients = ({ name, cpf, id, area, onClick }: CardClientsProps) => {
  const { token } = useAuth();
  const { people, setPeople } = usePeople();
  const [renderModal, setRenderModal] = useState<boolean>(false);

  const deleteClient = (id: number) => {
    const newList = people.filter((item) => item.id !== id);

    api
      .delete(`/people/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Cliente deletado com sucesso");
        setPeople(newList);
      })
      .catch((_) => toast.error("Houve um erro"));

    setRenderModal(false);
  };

  return (
    <Container>
      <div className="infosBox">
        <div onClick={onClick} className="diceBackground">
          <Dice className="diceIcon" />
        </div>
        <div className="clientInfo">
          <h4>{name}</h4>
          <span>{cpf}</span>
          <span>Área do Processo: {area}</span>
        </div>
      </div>
      <button className="trashButton" onClick={() => setRenderModal(true)}>
        <Delete />
      </button>
      {renderModal && (
        <Modal
          onClose={() => setRenderModal(false)}
          modalTitle="Confirma a exclusão do cliente?"
        >
          <div className="deleteClientModal">
            <Button onClick={() => deleteClient(id)}>Sim</Button>
            <Button onClick={() => setRenderModal(false)}>Não</Button>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default CardClients;
