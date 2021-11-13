import { Container, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/schema";
import { useUser } from "../../providers/User";
import Input from "../../components/Input";
import api from "../../services/api";

interface User {
  email: string;
  password: string;
  phone: string;
  oab: string;
  state: string;
  username: string;
}

const Register = () => {
  const { setUser } = useUser();

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
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error.data.response));
  };

  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleSubmit(createUser)}>
          <Input placeholder="OAB" {...register("oab")} />
          <Input placeholder="Estado" {...register("state")} />
          <Input placeholder="Usuário" {...register("username")} />
          <Input placeholder="E-mail" {...register("email")} />
          <Input placeholder="Telefone" {...register("phone")} />
          <Input placeholder="Senha" {...register("password")} />
          <Input
            placeholder="Confirmar Senha"
            {...register("confirmPassword")}
          />
        </form>
      </FormContainer>
    </Container>
  );
};

export default Register;
