import Modal from "../Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaCreateComment from "../schemaCreateComment";
import { useClient } from "../../providers/Client";
import { useAuth } from "../../providers/Auth";
import api from "../../services/api";
import { toast } from "react-toastify";
import Input from "../Input";
import Button from "../Button";

interface Comments {
  title: string;
  comment: string;
  id: number;
}

interface ModalProps {
  setRenderModal: (boolean: boolean) => void;
}

const ModalCreateComment = ({ setRenderModal }: ModalProps) => {
  const { client, setClient, comments, setComments } = useClient();
  const { token } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Comments>({
    resolver: yupResolver(schemaCreateComment),
  });

  const createComment = (data: Comments) => {
    const newDataFormatted = new Date().toLocaleString("pt-BR");
    const newData = {
      title: data.title,
      comment: data.comment,
      data: newDataFormatted,
      id: comments.length + 1,
    };
    const newComments = { comments: [...comments, newData] };

    api
      .patch(`/people/${client.id}`, newComments, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setComments(response.data.comments);
        setRenderModal(false);
        toast.success("comentário criado com sucesso");
      });

    reset({
      title: "",
      comment: "",
    });
  };

  return (
    <>
      <Modal
        onClose={() => {
          setRenderModal(false);
        }}
        modalTitle="Comentário"
      >
        <form onSubmit={handleSubmit(createComment)} style={{ width: "100%" }}>
          <Input
            maxLength={25}
            name="title"
            error={errors.title?.message}
            register={register}
            placeholder="Título do comentário"
          />
          <textarea
            maxLength={5000}
            placeholder="comentário..."
            {...register("comment")}
          />
          <span className="erro">{errors.comment?.message}</span>
          <Button type="submit">cadastrar comentário</Button>
        </form>
      </Modal>
    </>
  );
};

export default ModalCreateComment;
