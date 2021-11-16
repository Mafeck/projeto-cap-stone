import { useEffect, useState } from "react";
import CardClients from "../../components/CardClients";
import api from "../../services/api";
import { ReactComponent as PageClientIcon } from "../../assets/pageClientIcon.svg";
import { TitleBox } from "./style";
import Footer from "../../components/Footer";
import { useAuth } from "../../providers/Auth";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import HeaderDashBoard from "../../components/HeaderDashBoard";

interface CardClientsProps {
  name: string;
  cpf: string;
  id: number;
  onClick: () => void;
}

interface Decode {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

const Clients = () => {
  const history = useHistory();
  const { token } = useAuth();
  const [tokenDecode] = useState<Decode>(jwtDecode(token));
  const [clientsList, setClientsList] = useState<CardClientsProps[]>([]);

  useEffect(() => {
    api
      .get(`users/${tokenDecode.sub}/people`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return setClientsList(response.data);
      });
  });

  const handleClick = (id: number) => {
    history.push(`/people/${id}`);
  };

  return (
    <div>
      <HeaderDashBoard />
      <TitleBox>
        <div className="frontBox">
          <h1>Lista de clientes</h1>
          <PageClientIcon />
        </div>
      </TitleBox>
      {clientsList.map((item, index) => {
        return (
          <CardClients
            key={index}
            onClick={() => handleClick(item.id)}
            id={item.id}
            name={item.name}
            cpf={item.cpf}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default Clients;
