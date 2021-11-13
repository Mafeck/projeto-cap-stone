import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup.string().required("Digite seu nome de usuário"),
  oab: yup.string().required("OAB obrigatória"),
  state: yup.string().required("Digite seu estado"),
  phone: yup.string().required("Digite seu telefone"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirmPassword: yup.string().required("Confirmação de senha obrigatória"),
});
