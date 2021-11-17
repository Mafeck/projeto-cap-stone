import { useEffect, useState } from "react";
import CardClients from "../../components/CardClients";
import api from "../../services/api";
import { ReactComponent as PageClientIcon } from "../../assets/pageClientIcon.svg";
import { Container, TitleBox, ContainerClients } from "./style";
import Footer from "../../components/Footer";
import { useAuth } from "../../providers/Auth";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import HeaderDashBoard from "../../components/HeaderDashBoard";
import { usePeople } from "../../providers/People";
import { useClient } from "../../providers/Client";

interface Decode {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

const Clients = () => {
  const history = useHistory();
  const { people, setPeople } = usePeople();
  const { setClient } = useClient();
  const { token } = useAuth();
  const [tokenDecode] = useState<Decode>(jwtDecode(token));

  useEffect(() => {
    api
      .get(`/users/${tokenDecode.sub}/people`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setPeople(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (id: number) => {
    const filteredCLient = people.find((value) => value.id === id);
    localStorage.setItem("@id:haki", JSON.stringify(id));
    setClient(filteredCLient!);
    history.push(`/dashboard/people/${id}`);
  };

  return (
    <Container>
      <HeaderDashBoard />
      <TitleBox>
        <div className="frontBox">
          <h1>Lista de clientes</h1>
          <PageClientIcon />
        </div>
      </TitleBox>
      <ContainerClients>
        {people.map((item, index) => {
          return (
            <CardClients
              key={index}
              onClick={() => handleClick(item.id)}
              id={item.id}
              name={item.name}
              cpf={item.cpf!}
            />
          );
        })}
      </ContainerClients>
      <Footer />
    </Container>
  );
};

export default Clients;
