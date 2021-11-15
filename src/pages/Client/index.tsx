import { Container, ContentInfo, CommentsContainer } from "./styles";
import { useState } from "react";
import { FaDice } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { usePeople } from "../../providers/People";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaComment } from "../../components/schema";
import CardComment from "../../components/CardComment";
import Modal from "../../components/Modal";
import Input from "../../components/Input";

interface Comment {
  title: string;
  comment: string;
  id: number;
}

const Client = () => {
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const { people } = usePeople();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Comment>({
    resolver: yupResolver(schemaComment),
  });

  const createComment = () => {};

  return (
    <Container>
      <nav>
        <div onClick={() => history.push("/people")} className="divAction">
          {"<"}
        </div>
        <div className="divIcon">
          <FaDice />
        </div>
        <h1 className="client__name">Client Fake</h1>
      </nav>
      <ContentInfo>
        <div className="itemInfo">
          <span>Idade</span> <span>21</span>
        </div>
        <div className="itemInfo">
          <span>CPF</span> <span>000.000.000-10</span>
        </div>
        <div className="itemInfo">
          <span>Processo</span> <span>443.2132-2</span>
        </div>
      </ContentInfo>
      <CommentsContainer>
        <div className="comments__info">
          <h1 className="comments__title">Comentários</h1>
          <button
            onClick={() => setRenderModal(true)}
            className="comment__button"
          >
            Cadastrar comentário
          </button>
        </div>
        <div className="comments">
          <CardComment
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            commentTitle="teste"
            onClick={() => console.log("oi")}
          />
          <CardComment
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            commentTitle="teste"
            onClick={() => console.log("oi")}
          />
          <CardComment
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            commentTitle="teste"
            onClick={() => console.log("oi")}
          />
          <CardComment
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            commentTitle="teste"
            onClick={() => console.log("oi")}
          />
        </div>
      </CommentsContainer>
      {renderModal && (
        <Modal onClose={() => setRenderModal(false)} modalTitle="Comentário">
          <form onSubmit={handleSubmit(createComment)}>
            <Input
              maxLength={15}
              name="title"
              error={errors.title?.message}
              register={register}
              placeholder="Título do comentário"
            />
            <textarea placeholder="comentário..." {...register("comment")} />
          </form>
        </Modal>
      )}
    </Container>
  );
};

export default Client;
