import { Container, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/schema";
import api from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";

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
      .post("/users", newData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.data.response));
  };

  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleSubmit(createUser)}>
          <Input placeholder="OAB" />
          <Input placeholder="Estado" />
          <Input placeholder="Usuário" />
          <Input placeholder="E-mail" />
          <Input placeholder="Telefone" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirmar Senha" />
          <Button type="submit">Cadastrar</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Register;
