import * as yup from "yup";

export const schemaClient = yup.object().shape({
  name: yup.string().required("Nome obrigatório."),
  cpf: yup.string(),
  genre: yup.string(),
  naturalness: yup.string(),
  nationality: yup.string(),
  fatherName: yup.string(),
  motherName: yup.string(),
  qualification: yup.string(),
  company: yup.string(),
  phone: yup.string(),
  type: yup.string().required("Tipo de pessoa obrigatório"),
  maritalStatus: yup.string(),
  road: yup.string(),
  zipCode: yup.string(),
  district: yup.string(),
  houseNumber: yup.string(),
  area: yup.string(),
  process: yup.string(),
});