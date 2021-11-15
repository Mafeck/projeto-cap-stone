import * as yup from "yup";

export const schemaClient = yup.object().shape({
  name: yup.string().required("Nome obrigatório."),
  cpf: yup.string().required("CPF obrigatório").min(9, "Mínimo de 9 caracteres"),
  genre: yup.string().required("Gênero obrigatório"),
  naturalness: yup.string().required("Naturalidade obrigatória"),
  nationality: yup.string().required("Nacionalidade obrigatória"),
  fatherName: yup.string().required("Nome do pai obrigatório"),
  motherName: yup.string().required("Nome da mãe obrigatório"),
  qualification: yup.string().required("Qualificação obrigatório"),
  company: yup.string().required("Empresa obrigatória"),
  phone: yup.string().required("Número de telefone obrigatório").min(11, "Mínimo de 11 caracteres"),
  type: yup.string().required("Tipo obrigatório"),
  maritalStatus: yup.string().required("Estado civil obrigatório"),
  road: yup.string().required("Nome da rua obrigatório"),
  zipCode: yup.string().required("Código postal obrigatório"),
  district: yup.string().required("Nome do bairro obrigatório"),
  houseNumber: yup.string().required("Número da casa obrigatório"),
});