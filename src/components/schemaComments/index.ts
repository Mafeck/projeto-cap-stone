import * as yup from "yup";

const schemaComment = yup.object().shape({
  title: yup.string().required("Título Obrigatório"),
  comment: yup.string().required("Comentário Obrigatório"),
});

export default schemaComment;
