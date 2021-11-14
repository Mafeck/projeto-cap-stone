import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup.string().required("Digite seu nome de usuário"),
  oab: yup
    .string()
    .required("OAB obrigatória")
    .min(5, "Mínimo de 5 caracteres"),
  state: yup.string().required("Digite seu estado"),
  phone: yup
    .string()
    .required("Digite seu telefone")
    .min(11, "Mínimo de 11 caracteres"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%&*^-`?]).{8,}$/i,
      "Senha muito fraca, coloque pelo menos 1 caractere especial, 1 letra maiúscula, 1 letra minúscula e 1 número"
    ),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});
