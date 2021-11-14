import { Container, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/schema";
import api from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";

interface User {
  email: string;
  password: string;
  phone: string;
  oab: string;
  state: string;
  username: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User[]>({ resolver: yupResolver(schema) });

  const createUser = (data: User) => {
    const newData = {
      email: data.email,
      password: data.password,
      phone: data.phone,
      oab: data.oab,
      state: data.state,
      username: data.username,
    };

    api
      .post("/signup", newData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.data.response));
  };

  return (
    <Container>
      <Header />
      <FormContainer>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(createUser)}>
          <Input
            placeholder="OAB"
            type="number"
            style={{ width: "45%", maxWidth: "180px" }}
          />
          <Input
            type="text"
            placeholder="Estado"
            style={{ width: "45%", maxWidth: "180px" }}
          />
          <Input placeholder="Usuário" type="text" />
          <Input placeholder="E-mail" type="email" />
          <Input placeholder="Telefone" type="number" />
          <Input placeholder="Senha" type="password" />
          <Input placeholder="Confirmar Senha" type="password" />
          <Button type="submit">Cadastrar</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Register;
