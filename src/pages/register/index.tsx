import { Container, FormContainer } from "./styles";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/schema";
import { Link, useHistory, Redirect } from "react-router-dom";
import api from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useAuth } from "../../providers/Auth";

interface UserData {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  oab: string;
  state: string;
  username: string;
}

const Register = () => {
  const history = useHistory();
  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const createUser = (data: UserData) => {
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
      .then((response) => {
        localStorage.clear();
        toast.success("Conta criada");
        setTimeout(() => history.push("/login"), 2000);
      })
      .catch((error) => toast.error(error.response.data));
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(createUser)}>
            <Input
              data-cy="oab/register"
              placeholder="OAB"
              name="oab"
              type="number"
              width="47%"
              register={register}
              error={errors.oab?.message}
            />
            <Input
              data-cy="state/register"
              type="text"
              name="state"
              width="47%"
              placeholder="Estado"
              register={register}
              error={errors.state?.message}
            />
            <Input
              data-cy="username/register"
              placeholder="Nome de Usuário"
              name="username"
              type="text"
              maxLength={15}
              register={register}
              error={errors.username?.message}
            />
            <Input
              data-cy="email/register"
              placeholder="E-mail"
              name="email"
              type="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              data-cy="phone/register"
              placeholder="Telefone"
              name="phone"
              type="number"
              register={register}
              error={errors.phone?.message}
            />
            <Input
              data-cy="password/register"
              placeholder="Senha"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
            />
            <Input
              data-cy="confirmpassword/register"
              placeholder="Confirmar Senha"
              name="confirmPassword"
              type="password"
              register={register}
              error={errors.confirmPassword?.message}
            />
            <Button data-cy="button/register" type="submit">
              Cadastrar
            </Button>
            <p>
              Já possui um cadastro? <Link to="/login">faça seu login</Link>
            </p>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
