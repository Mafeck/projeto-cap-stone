import * as yup from "yup";

const schemaCreateComment = yup.object().shape({
  title: yup.string().required("Título Obrigatório"),
  comment: yup.string().required("Comentário Obrigatório"),
});

export default schemaCreateComment;