import { useEffect, useState } from "react";
import CardClients from "../../components/CardClients";
import api from "../../services/api";
import { ReactComponent as PageClientIcon } from "../../assets/pageClientIcon.svg";
import { Container, TitleBox, ContainerClients, InputDiv } from "./style";
import Footer from "../../components/Footer";
import { useAuth } from "../../providers/Auth";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import HeaderDashBoard from "../../components/HeaderDashBoard";
import { usePeople } from "../../providers/People";
import { useClient } from "../../providers/Client";
import Input from "../../components/Input";
import { Redirect } from "react-router-dom";

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
  const [input, setInput] = useState<string>("");

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

  if (token) {
    return <Redirect to="/dashboard" />;
  }
  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <HeaderDashBoard />
      <TitleBox>
        <div className="frontBox">
          <div className="titleIconBox">
            <div
              onClick={() => history.push("/dashboard")}
              className="divAction"
            >
              {"<"}
            </div>
            <h1>Lista de clientes</h1>
          </div>
          <PageClientIcon />
        </div>
      </TitleBox>
      <InputDiv>
        <Input
          placeholder="Pesquisar por nome ou área do processo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          register={() => {}}
        />
      </InputDiv>
      <ContainerClients>
        {input.length > 0
          ? people
              .filter(
                (item) =>
                  item.name.toLowerCase().includes(input.toLowerCase()) ||
                  item.process?.area.toLowerCase().includes(input.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <CardClients
                    key={index}
                    onClick={() => handleClick(item.id)}
                    id={item.id}
                    name={item.name}
                    cpf={item.cpf!}
                    area={item.process?.area}
                  />
                );
              })
          : people.map((item, index) => {
              return (
                <CardClients
                  key={index}
                  onClick={() => handleClick(item.id)}
                  id={item.id}
                  name={item.name}
                  cpf={item.cpf!}
                  area={item.process?.area}
                />
              );
            })}
      </ContainerClients>
      <Footer />
    </Container>
  );
};

export default Clients;
