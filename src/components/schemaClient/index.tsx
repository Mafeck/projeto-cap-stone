import * as yup from "yup";

export const schemaClient = yup.object().shape({
  name: yup.string().required("Campo obrigatório."),
  cpf: yup.string().required("Campo obrigatório."),
  genre: yup.string(),
  naturalness: yup.string(),
  nationality: yup.string(),
  fatherName: yup.string(),
  motherName: yup.string().required("Campo obrigatório"),
  qualification: yup.string(),
  company: yup.string(),
  phone: yup.string().required("Campo obrigatório"),
  type: yup.string().required("Campo obrigatório"),
  maritalStatus: yup.string().required("Campo obrigatório"),
  road: yup.string(),
  zipCode: yup.string(),
  district: yup.string(),
  houseNumber: yup.string(),
  area: yup.string().required("Campo obrigatório."),
  process: yup.string(),
});
